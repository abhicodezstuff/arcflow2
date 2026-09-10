import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  GitBranch,
  Sparkles,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

const sections = [
  {
    icon: BookOpen,
    title: "Getting started",
    description:
      "Learn the basics of Arcflow and create your first workflow.",
  },
  {
    icon: GitBranch,
    title: "Workflows",
    description:
      "Understand triggers, actions, conditions, and workflow execution.",
  },
  {
    icon: Sparkles,
    title: "AI actions",
    description:
      "Add AI-powered analysis, classification, and decisions to workflows.",
  },
  {
    icon: Code2,
    title: "Developer tools",
    description:
      "Use webhooks and APIs to connect Arcflow with your own systems.",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />

      <section className="border-b border-white/[0.06]">
        <Container>
          <div className="mx-auto max-w-4xl px-4 pb-24 pt-24 text-center sm:pt-32 lg:pb-32 lg:pt-40">
            <p className="text-sm font-medium text-[#8EA2FF]">
              Documentation
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-6xl">
              Learn how Arcflow works.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Everything you need to understand workflows, integrations, and
              automation with Arcflow.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <div
                  key={section.title}
                  className="group rounded-2xl border border-white/[0.08] bg-[#0F1012] p-7 transition-colors hover:bg-[#121316] sm:p-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                    <Icon
                      size={18}
                      className="text-zinc-400 transition-colors group-hover:text-[#8EA2FF]"
                    />
                  </div>

                  <h2 className="mt-7 text-lg font-medium text-zinc-100">
                    {section.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {section.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#0F1012] p-7 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-600">
              Quick start
            </p>

            <h2 className="mt-3 text-xl font-medium text-zinc-100">
              Build your first workflow
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
              Start with a trigger, add the actions you need, connect your
              tools, and let Arcflow handle the repetitive steps.
            </p>

            <Link
              href="/signup"
              className="group mt-7 inline-flex h-10 items-center gap-2 rounded-lg bg-zinc-100 px-4 text-sm font-medium text-zinc-950 hover:bg-white"
            >
              Get started
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}