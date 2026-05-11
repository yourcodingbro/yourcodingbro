import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  onClick?: () => void;
}

/*
 * Renders both logo variants simultaneously.
 * CSS in globals.css uses [data-theme] on <html> to show/hide the correct one —
 * set by an inline script before React hydrates, so no flicker occurs.
 *
 * Dark mode  → logo-white.png / logo-icon-white.png
 * Light mode → logo.png       / logo-icon.png
 */
export default function Logo({ onClick }: LogoProps) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center">
      {/* ── Mobile: icon only ── */}
      <span className="md:hidden">
        <Image
          src="/logo-icon-white.png"
          alt="YourCodingBro"
          width={40}
          height={40}
          className="logo-dark h-9 w-auto object-contain"
          priority
        />
        <Image
          src="/logo-icon.png"
          alt="YourCodingBro"
          width={40}
          height={40}
          className="logo-light h-9 w-auto object-contain"
          priority
        />
      </span>

      {/* ── Desktop: full horizontal logo ── */}
      <span className="hidden md:flex">
        <Image
          src="/logo-white.png"
          alt="YourCodingBro"
          width={200}
          height={40}
          className="logo-dark h-10 w-auto object-contain"
          priority
        />
        <Image
          src="/logo.png"
          alt="YourCodingBro"
          width={200}
          height={40}
          className="logo-light h-10 w-auto object-contain"
          priority
        />
      </span>
    </Link>
  );
}
