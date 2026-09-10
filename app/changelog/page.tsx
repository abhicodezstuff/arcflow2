import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

const updates = [
  {
    version: "v1.4",
    date: "September 2026",
    title: "Workflow execution improvements",
    description:
      "Faster workflow execution, clearer status information, and improved visibility into individual workflow steps.",
  },
  {
    version: "v1.3",
    date: "August 2026",
    title: "AI actions",
    description:
      "Introduce AI-powered workflow actions for classification, analysis, and automated decisions.",
  },
  {
    version: "v1.2",
    date: "July 2026",
    title: "More integrations",
    description:
      "Expanded the Arcflow ecosystem with additional tools and improved webhook support.",
  },
];

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />

      <section className="border-b border-white/[0.06]">
        <Container>
          <div className="mx-auto max-w-4xl px-4 pb-24 pt-24 text-center sm:pt-32 lg:pb-32 lg:pt-40">
            <p className="text-sm font-medium text-[#8EA2FF]">
              Changelog
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-6xl">
              What's new in Arcflow.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Product updates, improvements, and new capabilities as Arcflow
              evolves.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5">
            {updates.map((update) => (
              <article
                key={update.version}
                className="rounded-2xl border border-white/[0.08] bg-[#0F1012] p-7 sm:p-9"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#5B7CFF]/10">
                      <Sparkles size={16} className="text-[#8EA2FF]" />
                    </div>

                    <span className="text-sm font-medium text-zinc-300">
                      {update.version}
                    </span>
                  </div>

                  <span className="text-xs text-zinc-600">
                    {update.date}
                  </span>
                </div>

                <h2 className="mt-7 text-xl font-medium text-zinc-100">
                  {update.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {update.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl border-t border-white/[0.06] pt-8 text-center">
            <p className="text-sm text-zinc-600">
              More updates are on the way.
            </p>

            <Link
              href="/signup"
              className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-100"
            >
              Try Arcflow
              <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}