"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-white/[0.06] bg-[#09090B]/20 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute h-3.5 w-3.5 rounded-[4px] bg-[#5B7CFF] transition-transform duration-300 group-hover:translate-x-0.5" />
            <span className="absolute h-3.5 w-3.5 translate-x-1.5 rounded-[4px] border border-zinc-500 bg-[#09090B]/50 transition-transform duration-300 group-hover:translate-x-2" />
          </span>

          <span className="text-lg font-semibold tracking-tight text-zinc-100">
            Arcflow
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/features"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Features
          </Link>

          <Link
            href="/pricing"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Pricing
          </Link>

          <Link
            href="/about"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
          >
            Start building free
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-sm text-zinc-300 backdrop-blur-sm transition-colors hover:bg-white/[0.04]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-[#09090B]/50 backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8">
            <div className="flex flex-col gap-1">
              <Link
                href="/features"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-zinc-100"
              >
                Features
              </Link>

              <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-zinc-100"
              >
                Pricing
              </Link>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-zinc-100"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-zinc-100"
              >
                Contact
              </Link>

              <div className="my-3 h-px bg-white/[0.06]" />

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-zinc-100"
              >
                Log in
              </Link>

              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-zinc-100 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
              >
                Start building free
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}