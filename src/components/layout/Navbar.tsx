"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-6 h-6 flex flex-col justify-center gap-[5px]">
      <motion.span
        className="block h-[2px] w-6 bg-current origin-center rounded-full"
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
      <motion.span
        className="block h-[2px] w-6 bg-current rounded-full"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      <motion.span
        className="block h-[2px] w-6 bg-current origin-center rounded-full"
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function Navbar() {
  const t = useTranslations("globals.header");

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t("navLinks.whyUs"), href: "#why-us" },
    { label: t("navLinks.services"), href: "#services" },
    { label: t("navLinks.work"), href: "#portfolio" },
    { label: t("navLinks.testimonials"), href: "#testimonials" },
    { label: t("navLinks.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "backdrop-blur-md bg-bg/90 border-line"
            : "bg-transparent border-transparent"
        )}
      >
        <nav className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Logo />

            <div className="hidden gap-1 items-center md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm rounded-lg transition-all duration-200 text-fg-3 hover:text-fg hover:bg-fg/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden gap-4 items-center md:flex">
              <div className="flex items-center gap-1.5">
                <ThemeSwitcher />
                <LanguageSwitcher />
              </div>
              <ButtonLink
                href="#contact"
                size="lg"
                style="pill"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="after"
                className="text-white bg-brand hover:bg-brand-hover glow-blue"
              >
                {t("startProject")}
              </ButtonLink>
            </div>

            <div className="flex gap-1 items-center md:hidden">
              <ThemeSwitcher />
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="icon"
                icon={<HamburgerIcon open={menuOpen} />}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={t("toggleMenu")}
                aria-expanded={menuOpen}
                className="text-fg-3 hover:text-fg hover:bg-fg/5"
              />
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 backdrop-blur-sm bg-black/60 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              key="drawer"
              className="flex fixed top-0 bottom-0 left-0 z-50 flex-col w-72 border-r bg-bg border-line md:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center px-5 h-16 border-b border-line shrink-0">
                <Logo onClick={() => setMenuOpen(false)} />
              </div>

              <nav className="flex overflow-y-auto flex-col flex-1 gap-1 px-4 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium rounded-xl transition-all text-fg-2 hover:text-fg hover:bg-fg/5"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="px-4 pb-8 shrink-0">
                <ButtonLink
                  href="#contact"
                  size="lg"
                  style="pill"
                  onClick={() => setMenuOpen(false)}
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="after"
                  className="w-full text-white bg-brand hover:bg-brand-hover glow-blue"
                >
                  {t("startProject")}
                </ButtonLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
