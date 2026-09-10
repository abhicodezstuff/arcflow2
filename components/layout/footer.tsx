import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Integrations", href: "/integrations" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Documentation", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="relative flex h-7 w-7 items-center justify-center">
                <span className="absolute h-3.5 w-3.5 rounded-[4px] bg-[#5B7CFF]" />
                <span className="absolute h-3.5 w-3.5 translate-x-1.5 rounded-[4px] border border-zinc-500 bg-[#09090B]" />
              </span>

              <span className="text-lg font-semibold tracking-tight text-zinc-100">
                Arcflow
              </span>
            </Link>

            <p className="mt-5 text-sm leading-6 text-zinc-500">
              Automate the work between your tools and give your team more
              time to focus on what matters.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 items-center justify-center rounded-lg border border-white/[0.08] px-3 text-xs font-medium text-zinc-500 transition-colors hover:bg-white/[0.04] hover:text-zinc-200"
              >
                GitHub
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 items-center justify-center rounded-lg border border-white/[0.08] px-3 text-xs font-medium text-zinc-500 transition-colors hover:bg-white/[0.04] hover:text-zinc-200"
              >
                X
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 items-center justify-center rounded-lg border border-white/[0.08] px-3 text-xs font-medium text-zinc-500 transition-colors hover:bg-white/[0.04] hover:text-zinc-200"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-600">
                Product
              </p>

              <ul className="mt-5 space-y-4">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-600">
                Company
              </p>

              <ul className="mt-5 space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-600">
                Resources
              </p>

              <ul className="mt-5 space-y-4">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-200"
                    >
                      {link.label}
                      <ArrowUpRight size={12} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.06] py-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Arcflow. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-zinc-400"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-zinc-400"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}