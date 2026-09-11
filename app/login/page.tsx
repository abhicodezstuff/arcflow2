
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#09090B]/30">
      <Navbar />

      <section className="bg-[#09090B]/20 py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-md">
            <div className="text-center">
              <p className="text-sm font-medium text-[#8EA2FF]">
                Welcome back
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
                Log in to Arcflow.
              </h1>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Continue managing your workflows and automations.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0F1012]/65 p-7 backdrop-blur-sm sm:p-9">
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-zinc-400"
                  >
                    Work email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="alex@company.com"
                    className="mt-2 h-11 w-full rounded-lg border border-white/[0.08] bg-[#09090B]/65 px-3.5 text-sm text-zinc-100 outline-none backdrop-blur-sm placeholder:text-zinc-700 focus:border-[#5B7CFF]/50"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-xs font-medium text-zinc-400"
                    >
                      Password
                    </label>

                    <a
                      href="#"
                      className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="mt-2 h-11 w-full rounded-lg border border-white/[0.08] bg-[#09090B]/65 px-3.5 text-sm text-zinc-100 outline-none backdrop-blur-sm placeholder:text-zinc-700 focus:border-[#5B7CFF]/50"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-100 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
                >
                  Log in

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </button>
              </form>

              <div className="mt-7 border-t border-white/[0.06] pt-6 text-center">
                <span className="text-sm text-zinc-600">
                  Don't have an account?{" "}
                </span>

                <Link
                  href="/signup"
                  className="text-sm text-zinc-300 transition-colors hover:text-zinc-100"
                >
                  Create one
                </Link>
              </div>
            </div>

            <p className="mt-6 text-center text-xs leading-5 text-zinc-600">
              This is a frontend demonstration. Authentication is not
              connected to a backend.
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

