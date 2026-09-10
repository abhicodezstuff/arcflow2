import Link from "next/link";
import { ArrowRight, ArrowUpRight, Layers3, Target, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

const principles = [
  {
    icon: Target,
    title: "Clarity over complexity",
    description:
      "Automation should make work easier to understand, not introduce another complicated system your team has to manage.",
  },
  {
    icon: Layers3,
    title: "Built around real workflows",
    description:
      "Arcflow focuses on the actual work happening between tools, teams, and systems—not automation for its own sake.",
  },
  {
    icon: Zap,
    title: "Fast by default",
    description:
      "Workflows should move information and trigger actions without unnecessary manual steps or friction.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />

      <section className="border-b border-white/[0.06]">
        <Container>
          <div className="mx-auto max-w-4xl px-4 pb-24 pt-24 text-center sm:pt-32 lg:pb-32 lg:pt-40">
            <p className="text-sm font-medium text-[#8EA2FF]">
              About Arcflow
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-6xl">
              Software should remove work, not create more of it.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Arcflow exists to make the space between the tools a team uses
              disappear.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-sm font-medium text-[#8EA2FF]">
                The idea
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
                The work between tools is still work.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-zinc-500">
              <p>
                Modern teams have more software than ever. CRM systems,
                communication tools, databases, project management platforms,
                documents, analytics, and countless other services.
              </p>

              <p>
                The problem is that information rarely moves between those
                systems by itself. People copy data, send messages, update
                records, check conditions, and coordinate the next step.
              </p>

              <p>
                Arcflow is designed to automate that layer of work. Connect
                your tools, define what should happen, and let workflows take
                care of the repetitive steps.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#8EA2FF]">
              Principles
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
              What we believe.
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-500">
              A few principles guide how Arcflow approaches automation.
            </p>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-white/[0.08] bg-[#0F1012] p-7 sm:p-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                    <Icon size={18} className="text-zinc-400" />
                  </div>

                  <h3 className="mt-7 text-lg font-medium text-zinc-100">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] py-24 sm:py-32">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1012] px-6 py-14 sm:px-10 sm:py-16">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#8EA2FF]">
                The future of work
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
                Let people focus on the work that needs people.
              </h2>

              <p className="mt-5 text-base leading-7 text-zinc-500">
                Arcflow handles the repetitive coordination so teams can
                spend more time thinking, creating, and solving meaningful
                problems.
              </p>

              <Link
                href="/signup"
                className="group mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-zinc-100 px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
              >
                Start building free
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-3 border-t border-white/[0.06] pt-6 text-xs text-zinc-600">
              <ArrowUpRight size={14} />
              Automation should feel like infrastructure, not another task.
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}