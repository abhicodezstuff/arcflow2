
import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check, GitBranch, Sparkles, Zap } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

const featureGroups = [
  {
    icon: GitBranch,
    title: "Build visual workflows",
    description:
      "Create multi-step automations by connecting triggers, decisions, AI actions, and destinations in a workflow your entire team can understand.",
    features: [
      "Visual workflow builder",
      "Multi-step automation",
      "Conditional logic",
      "Reusable workflow components",
    ],
  },
  {
    icon: Sparkles,
    title: "Add intelligence where it matters",
    description:
      "Use AI inside your workflows to analyze information and make decisions without forcing your team to manually review every step.",
    features: [
      "AI-powered classification",
      "Information extraction",
      "Context-aware decisions",
      "Automated personalization",
    ],
  },
  {
    icon: Zap,
    title: "Keep everything moving",
    description:
      "Arcflow connects the systems your team already uses and moves information between them automatically.",
    features: [
      "Real-time workflow execution",
      "Connected business tools",
      "Custom webhooks",
      "Execution monitoring",
    ],
  },
];

export const metadata: Metadata = {
  title: "Features — Arcflow",
  description:
    "Build visual workflows, add AI-powered actions, and automate repetitive work between the tools your team already uses.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#09090B]/30">
      <Navbar />

      <section className="border-b border-white/[0.06] bg-[#09090B]/20">
        <Container>
          <div className="mx-auto max-w-4xl px-4 pb-24 pt-24 text-center sm:pt-32 lg:pb-32 lg:pt-40">
            <p className="text-sm font-medium text-[#8EA2FF]">
              Arcflow features
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-6xl">
              Everything you need to automate the work between your tools.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Build workflows that connect your systems, use AI where it
              matters, and keep repetitive work running automatically.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#09090B]/20 py-24 sm:py-32">
        <Container>
          <div className="space-y-6">
            {featureGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.title}
                  className="grid gap-10 rounded-2xl border border-white/[0.08] bg-[#0F1012]/55 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.12] hover:bg-[#111216]/65 sm:p-10 lg:grid-cols-2 lg:p-12"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                      <Icon size={19} className="text-[#8EA2FF]" />
                    </div>

                    <p className="mt-8 text-xs font-medium uppercase tracking-wide text-zinc-600">
                      0{index + 1}
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-3xl">
                      {group.title}
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                      {group.description}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-full rounded-xl border border-white/[0.06] bg-[#09090B]/45 p-6 backdrop-blur-sm">
                      <p className="text-xs font-medium uppercase tracking-wide text-zinc-600">
                        Included
                      </p>

                      <ul className="mt-5 space-y-4">
                        {group.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-sm text-zinc-400"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
                              <Check size={12} className="text-zinc-400" />
                            </span>

                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] bg-[#09090B]/20 py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.08] bg-[#0F1012]/55 px-6 py-14 text-center backdrop-blur-sm sm:px-10">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
              Ready to automate the repetitive work?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500">
              Start with one workflow and expand from there.
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
        </Container>
      </section>

      <Footer />
    </main>
  );
}
