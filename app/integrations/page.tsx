import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  FileText,
  Globe,
  Mail,
  MessageSquare,
  Users,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Integrations — Arcflow",
  description:
    "Connect Arcflow with the tools your team already uses, including HubSpot, Gmail, Slack, Notion, PostgreSQL, GitHub, and webhooks.",
};

const integrations = [
  {
    name: "HubSpot",
    category: "CRM",
    description: "Sync contacts, leads, deals, and customer information.",
    icon: Users,
  },
  {
    name: "Gmail",
    category: "Communication",
    description: "Trigger workflows from emails and automate follow-ups.",
    icon: Mail,
  },
  {
    name: "Slack",
    category: "Communication",
    description: "Send workflow alerts and keep your team informed.",
    icon: MessageSquare,
  },
  {
    name: "Notion",
    category: "Productivity",
    description: "Move information between workflows and your knowledge base.",
    icon: FileText,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Read, transform, and write structured business data.",
    icon: Database,
  },
  {
    name: "GitHub",
    category: "Development",
    description: "Connect development activity to the workflows around it.",
    icon: Code2,
  },
  {
    name: "Webhooks",
    category: "Developer",
    description: "Connect Arcflow to almost any service with HTTP requests.",
    icon: Globe,
  },
];

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-[#09090B]/30">
      <Navbar />

      <section className="border-b border-white/[0.06] bg-[#09090B]/20">
        <Container>
          <div className="mx-auto max-w-4xl px-4 pb-24 pt-24 text-center sm:pt-32 lg:pb-32 lg:pt-40">
            <p className="text-sm font-medium text-[#8EA2FF]">
              Integrations
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-6xl">
              Connect the tools your team already uses.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Arcflow brings your existing systems together so information
              can move automatically between the tools that power your work.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#09090B]/10 py-24 sm:py-32">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration) => {
              const Icon = integration.icon;

              return (
                <div
                  key={integration.name}
                  className="group bg-[#0F1012]/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-[#121316]/70 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                      <Icon
                        size={19}
                        className="text-zinc-400 transition-colors duration-300 group-hover:text-[#8EA2FF]"
                      />
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-400"
                    />
                  </div>

                  <p className="mt-7 text-xs font-medium uppercase tracking-wide text-zinc-600">
                    {integration.category}
                  </p>

                  <h2 className="mt-2 text-lg font-medium text-zinc-100">
                    {integration.name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {integration.description}
                  </p>
                </div>
              );
            })}

            <div className="bg-[#0F1012]/60 p-7 backdrop-blur-sm sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                <ArrowUpRight size={19} className="text-zinc-500" />
              </div>

              <p className="mt-7 text-xs font-medium uppercase tracking-wide text-zinc-600">
                Growing
              </p>

              <h2 className="mt-2 text-lg font-medium text-zinc-100">
                More tools, coming soon.
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Connect your stack through native integrations, webhooks, and
                custom actions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] bg-[#09090B]/10 py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.08] bg-[#0F1012]/60 px-6 py-14 text-center backdrop-blur-sm sm:px-10">
            <p className="text-sm font-medium text-[#8EA2FF]">
              Connect anything
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
              Your stack doesn't need to change.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500">
              Start with the tools you already depend on and build workflows
              around the way your team actually works.
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