import { FaLinkedin, FaFacebook } from "react-icons/fa6";
import { getTranslations } from "next-intl/server";
import Logo from "@/components/atoms/Logo";
import CookiePreferencesButton from "@/components/buttons/CookiePreferencesButton";

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/viktornagy97",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <FaFacebook className="w-5 h-5" />,
  },
];

export type FooterProps = {
  contactEmail: string;
};

export default async function Footer({ contactEmail }: FooterProps) {
  const t = await getTranslations("globals.footer");
  const serviceItems = (await getTranslations("pages.homepage.services")).raw(
    "items"
  ) as { title: string }[];
  const serviceNames = serviceItems.map((item) => item.title);

  return (
    <footer className="border-t border-line bg-bg">
      <div className="px-4 py-12 mx-auto max-w-6xl sm:px-6 lg:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-10 mb-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Logo full />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-fg-4">
              {t("description")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest uppercase text-fg">
              {t("servicesTitle")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceNames.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm transition-colors cursor-default text-fg-4 hover:text-fg-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest uppercase text-fg">
              {t("contactTitle")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-sm transition-colors text-fg-4 hover:text-accent"
                >
                  {contactEmail}
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex justify-center items-center w-9 h-9 rounded-lg border transition-all duration-200 bg-elevated border-line text-fg-3 hover:text-accent hover:border-accent/40"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-4 justify-between items-center pt-8 text-xs border-t border-line sm:flex-row text-fg-4">
          <p>{t("copyright", { year: currentYear })}</p>
          <CookiePreferencesButton className="transition-colors cursor-pointer hover:text-accent">
            {t("managePreferences")}
          </CookiePreferencesButton>
        </div>
      </div>
    </footer>
  );
}
