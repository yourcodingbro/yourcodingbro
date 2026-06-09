import { FaLinkedin, FaFacebook } from "react-icons/fa6";
import { Box } from "lucide-react";
import { serviceNames } from "@/lib/constants/services";

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

export default function Footer({ contactEmail }: FooterProps) {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-navy border border-brand/40 flex items-center justify-center">
                <Box className="w-5 h-5 text-accent" />
              </div>
              <span className="font-bold text-fg tracking-tight">
                YourCoding<span className="text-accent">Bro</span>
              </span>
            </div>
            <p className="text-fg-4 text-sm leading-relaxed max-w-xs">
              Your dedicated development partner. Clean code, fast delivery,
              real results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-fg font-semibold text-sm mb-4 uppercase tracking-widest">
              Services
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
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="#contact"
                  className="text-fg-4 text-sm hover:text-accent transition-colors"
                >
                  Start a project
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
          <p>© {currentYear} YourCodingBro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
