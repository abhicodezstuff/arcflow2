
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "For individuals exploring workflow automation.",
    cta: "Get started",
    featured: false,
    features: [
      "3 active workflows",
      "100 workflow runs / month",
      "5 integrations",
      "Basic workflow logs",
      "Community support",
    ],
  },
  {
    name: "Growth",
    price: "$29",
    description: "For teams building automation into their daily work.",
    cta: "Start free trial",
    featured: true,
    features: [
      "Unlimited workflows",
      "10,000 workflow runs / month",
      "50+ integrations",
      "AI-powered actions",
      "Advanced workflow logs",
      "Team collaboration",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: "$99",
    description: "For organizations running critical workflows at scale.",
    cta: "Talk to sales",
    featured: false,
    features: [
      "Unlimited workflows",
      "Unlimited workflow runs",
      "All integrations",
      "Advanced AI actions",
      "Priority execution",
      "SSO & advanced security",
      "Dedicated support",
    ],
  },
];

const comparison = [
  {
    feature: "Active workflows",
    starter: "3",
    growth: "Unlimited",
    scale: "Unlimited",
  },
  {
    feature: "Workflow runs",
    starter: "100 / month",
    growth: "10,000 / month",
    scale: "Unlimited",
  },
  {
    feature: "Integrations",
    starter: "5",
    growth: "50+",
    scale: "All",
  },
  {
    feature: "AI actions",
    starter: "—",
    growth: "Included",
    scale: "Advanced",
  },
  {
    feature: "Team collaboration",
    starter: "—",
    growth: "Included",
    scale: "Included",
  },
  {
    feature: "SSO & advanced security",
    starter: "—",
    growth: "—",
    scale: "Included",
  },
  {
    feature: "Priority support",
    starter: "—",
    growth: "Included",
    scale: "Dedicated",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#09090B]/30">
      <Navbar />

      <section className="border-b border-white/[0.06] bg-[#09090B]/20">
        <Container>
          <div className="mx-auto max-w-4xl px-4 pb-20 pt-24 text-center sm:pt-32 lg:pb-24">
            <p className="text-sm font-medium text-[#8EA2FF]">
              Pricing
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-6xl">
              A plan for every stage of automation.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Start for free, build your workflows, and scale when automation
              becomes part of how your team works.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#09090B]/10 py-24 sm:py-32">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-7 backdrop-blur-sm sm:p-8 ${
                  plan.featured
                    ? "border-[#5B7CFF]/40 bg-[#111318]/70"
                    : "border-white/[0.08] bg-[#0F1012]/60"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-6 rounded-full border border-[#5B7CFF]/30 bg-[#111318]/90 px-3 py-1 text-xs font-medium text-[#8EA2FF] backdrop-blur-sm">
                    Most popular
                  </div>
                )}

                <h2 className="text-lg font-medium text-zinc-100">
                  {plan.name}
                </h2>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-zinc-500">
                  {plan.description}
                </p>

                <div className="mt-8 flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-zinc-100">
                    {plan.price}
                  </span>

                  {plan.name !== "Starter" && (
                    <span className="pb-1 text-xs text-zinc-500">
                      per user / month
                    </span>
                  )}
                </div>

                <Link
                  href="/signup"
                  className={`mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    plan.featured
                      ? "bg-zinc-100 text-zinc-950 hover:bg-white"
                      : "border border-white/[0.1] text-zinc-300 hover:bg-white/[0.04] hover:text-zinc-100"
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="my-8 h-px bg-white/[0.06]" />

                <p className="text-xs font-medium uppercase tracking-wide text-zinc-600">
                  What's included
                </p>

                <ul className="mt-5 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-zinc-400"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-zinc-500"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] bg-[#09090B]/10 py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#8EA2FF]">
                Compare plans
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100">
                Everything at a glance.
              </h2>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Choose the level of automation and control that fits your
                team's needs.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]/30 backdrop-blur-sm">
              <div className="grid grid-cols-4 border-b border-white/[0.06] bg-[#0F1012]/65">
                <div className="p-4 text-xs font-medium uppercase tracking-wide text-zinc-600 sm:p-5">
                  Feature
                </div>

                <div className="p-4 text-xs font-medium text-zinc-400 sm:p-5">
                  Starter
                </div>

                <div className="p-4 text-xs font-medium text-[#8EA2FF] sm:p-5">
                  Growth
                </div>

                <div className="p-4 text-xs font-medium text-zinc-400 sm:p-5">
                  Scale
                </div>
              </div>

              {comparison.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-4 border-b border-white/[0.06] last:border-b-0"
                >
                  <div className="p-4 text-xs text-zinc-400 sm:p-5 sm:text-sm">
                    {row.feature}
                  </div>

                  <div className="p-4 text-xs text-zinc-500 sm:p-5 sm:text-sm">
                    {row.starter}
                  </div>

                  <div className="p-4 text-xs text-zinc-300 sm:p-5 sm:text-sm">
                    {row.growth}
                  </div>

                  <div className="p-4 text-xs text-zinc-500 sm:p-5 sm:text-sm">
                    {row.scale}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] bg-[#09090B]/10 py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.08] bg-[#0F1012]/60 px-6 py-14 text-center backdrop-blur-sm sm:px-10">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
              Start automating today.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500">
              Build your first workflow and see how much repetitive work you
              can remove.
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
