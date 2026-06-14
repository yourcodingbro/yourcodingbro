"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { GoogleTagManager } from "@next/third-parties/google";
import * as CookieConsent from "vanilla-cookieconsent";

type CookieConsentTranslation =
  CookieConsent.CookieConsentConfig["language"]["translations"][string];

export default function CookieConsentBanner() {
  const locale = useLocale();
  const t = useTranslations("globals.cookieConsent");
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const translation: CookieConsentTranslation = {
        consentModal: {
          title: t("consentModal.title"),
          description: t("consentModal.description"),
          acceptAllBtn: t("consentModal.acceptAllBtn"),
          acceptNecessaryBtn: t("consentModal.acceptNecessaryBtn"),
          showPreferencesBtn: t("consentModal.showPreferencesBtn"),
        },
        preferencesModal: {
          title: t("preferencesModal.title"),
          acceptAllBtn: t("preferencesModal.acceptAllBtn"),
          acceptNecessaryBtn: t("preferencesModal.acceptNecessaryBtn"),
          savePreferencesBtn: t("preferencesModal.savePreferencesBtn"),
          closeIconLabel: t("preferencesModal.closeIconLabel"),
          sections: [
            {
              title: t("preferencesModal.sections.necessary.title"),
              description: t("preferencesModal.sections.necessary.description"),
              linkedCategory: "necessary",
            },
            {
              title: t("preferencesModal.sections.analytics.title"),
              description: t("preferencesModal.sections.analytics.description"),
              linkedCategory: "analytics",
            },
          ],
        },
      };

      if (!mounted) return;

      await CookieConsent.run({
        guiOptions: {
          consentModal: {
            layout: "box",
            position: "bottom right",
            equalWeightButtons: false,
          },
          preferencesModal: {
            layout: "box",
          },
        },
        categories: {
          necessary: {
            enabled: true,
            readOnly: true,
          },
          analytics: {
            enabled: false,
          },
        },
        language: {
          default: locale,
          autoDetect: "document",
          translations: {
            [locale]: translation,
          },
        },
        onConsent: () => {
          setAnalyticsAllowed(CookieConsent.acceptedCategory("analytics"));
        },
        onChange: () => {
          setAnalyticsAllowed(CookieConsent.acceptedCategory("analytics"));
        },
      });

      if (mounted) {
        setAnalyticsAllowed(CookieConsent.acceptedCategory("analytics"));
      }
    })();

    return () => {
      mounted = false;
    };
  }, [locale, t]);

  if (analyticsAllowed && process.env.NEXT_PUBLIC_GTM_ID) {
    return <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />;
  }

  return null;
}
