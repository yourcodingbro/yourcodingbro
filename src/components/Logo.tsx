import Image from "next/image";
import { Link } from "@/i18n/navigation";

const altText = "YourCodingBro";
const fullWidth = 200;
const iconSize = 40;

export type LogoProps = {
  full?: boolean;
  onClick?: () => void;
};

/*
 * Renders both logo variants simultaneously.
 * CSS in globals.css uses [data-theme] on <html> to show/hide the correct one —
 * set by an inline script before React hydrates, so no flicker occurs.
 *
 * Dark mode  → logo-white.png / logo-icon-white.png
 * Light mode → logo.png       / logo-icon.png
 */
export default function Logo({ full, onClick }: LogoProps) {
  if (full) {
    return (
      <Link href="/" onClick={onClick} className="flex items-center">
        <FullLogo />
      </Link>
    );
  }

  return (
    <Link href="/" onClick={onClick} className="flex items-center">
      {/* ── Mobile: icon only ── */}
      <span className="md:hidden">
        <IconLogo />
      </span>

      {/* ── Desktop: full horizontal logo ── */}
      <span className="hidden md:flex">
        <FullLogo />
      </span>
    </Link>
  );
}

function FullLogo() {
  return (
    <>
      <Image
        src="/logo-white.png"
        alt={altText}
        width={fullWidth}
        height={iconSize}
        className="logo logo-dark"
        priority
      />
      <Image
        src="/logo.png"
        alt={altText}
        width={fullWidth}
        height={iconSize}
        className="logo logo-light"
        priority
      />
    </>
  );
}

function IconLogo() {
  return (
    <>
      <Image
        src="/logo-icon-white.png"
        alt={altText}
        width={iconSize}
        height={iconSize}
        className="logo logo-dark"
        priority
      />
      <Image
        src="/logo-icon.png"
        alt={altText}
        width={iconSize}
        height={iconSize}
        className="logo logo-light"
        priority
      />
    </>
  );
}
