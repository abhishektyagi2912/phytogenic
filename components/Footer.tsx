"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/All" },
  { label: "Collections", href: "/Product" },
  { label: "About", href: "/About" },
  { label: "Phytogenic", href: "/" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-cream-50 to-sage-100">
      <div className="container-custom grid grid-cols-1 gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_1fr_1fr] lg:items-start">
        <div>
          <a
            href="mailto:sales@phytogenic.co.in"
            className="block text-base font-semibold text-forest-950 hover:text-forest-700"
          >
            sales@phytogenic.co.in
          </a>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sage-600">
            Bringing nature closer through herbal extracts and natural
            actives that create lasting, effective formulations.
          </p>
        </div>

        <div className="flex items-start justify-start lg:justify-center lg:pt-2">
          <Link
            href="/Contact"
            className="inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-forest-900/20 transition-transform hover:-translate-y-0.5"
          >
            Request a Sample
          </Link>
        </div>

        <nav className="flex flex-col items-start gap-2 text-right lg:items-end">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xl font-semibold text-forest-950 transition-colors hover:text-forest-600 sm:text-2xl"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="container-custom">
        <div className="border-t border-forest-900/10" />
      </div>

      <div className="container-custom flex flex-col-reverse items-center justify-between gap-3 py-6 text-xs text-sage-500 sm:flex-row">
        <Link href="/terms-and-conditions" className="hover:text-forest-700">
          Terms and conditions
        </Link>
        <span>
          © {year} Phytogenic Life Science. All Rights Reserved
        </span>
        <Link href="/privacy-policy" className="hover:text-forest-700">
          Privacy Policy
        </Link>
      </div>

      <div className="relative -mt-2 h-28 overflow-hidden sm:h-40 lg:h-56">
        <p className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap bg-gradient-to-b from-forest-300/60 to-forest-100/0 bg-clip-text font-display text-[110px] font-bold leading-none text-transparent sm:text-[180px] lg:text-[240px]">
          Phytogenic
        </p>
      </div>
    </footer>
  );
};

export default Footer;
