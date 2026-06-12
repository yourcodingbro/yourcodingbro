import { FaLinkedin, FaFacebook } from "react-icons/fa6";
import { getTranslations } from "next-intl/server";
import Logo from "@/components/Logo";

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
  const serviceItems = (await getTranslations("pages.homepage.services"))
    .raw("items") as { title: string }[];
  const serviceNames = serviceItems.map((item) => item.title);

  return (
    <footer className="border-t border-line bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Logo full />
            </div>
            <p className="text-fg-4 text-sm leading-relaxed max-w-xs">
              {t("description")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-fg font-semibold text-sm mb-4 uppercase tracking-widest">
              {t("servicesTitle")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceNames.map((item) => (
                <li key={item}>
                  <span className="text-fg-4 text-sm hover:text-fg-2 transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-fg font-semibold text-sm mb-4 uppercase tracking-widest">
              {t("contactTitle")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="#contact"
                  className="text-fg-4 text-sm hover:text-accent transition-colors"
                >
                  {t("startProject")}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-fg-4 text-sm hover:text-accent transition-colors"
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
                  className="w-9 h-9 rounded-lg bg-elevated border border-line flex items-center justify-center text-fg-3 hover:text-accent hover:border-accent/40 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-fg-4">
          <p>{t("copyright", { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
}
