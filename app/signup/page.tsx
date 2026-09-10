import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

const benefits = [
  "3 active workflows on the free plan",
  "Connect your existing tools",
  "Build your first automation in minutes",
];

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-medium text-[#8EA2FF]">
                Get started
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-5xl">
                Start automating the work between your tools.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
                Create your Arcflow workspace and build your first workflow
                without needing to change the tools your team already uses.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-zinc-400"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.05]">
                      <Check size={12} className="text-zinc-300" />
                    </span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0F1012] p-7 sm:p-9">
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-zinc-100">
                  Create your workspace
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  This is a frontend demo for the Arcflow portfolio project.
                </p>
              </div>

              <form className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-zinc-400"
                  >
                    Full name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Alex Morgan"
                    className="mt-2 h-11 w-full rounded-lg border border-white/[0.08] bg-[#09090B] px-3.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-700 focus:border-[#5B7CFF]/50"
                  />
                </div>

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
                    className="mt-2 h-11 w-full rounded-lg border border-white/[0.08] bg-[#09090B] px-3.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-700 focus:border-[#5B7CFF]/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-xs font-medium text-zinc-400"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    className="mt-2 h-11 w-full rounded-lg border border-white/[0.08] bg-[#09090B] px-3.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-700 focus:border-[#5B7CFF]/50"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-100 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
                >
                  Create workspace
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </button>
              </form>

              <p className="mt-6 text-center text-xs leading-5 text-zinc-600">
                By continuing, you agree to the Arcflow Terms and Privacy
                Policy.
              </p>

              <div className="mt-7 border-t border-white/[0.06] pt-6 text-center">
                <span className="text-sm text-zinc-600">
                  Already have an account?{" "}
                </span>

                <Link
                  href="/login"
                  className="text-sm text-zinc-300 transition-colors hover:text-zinc-100"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}