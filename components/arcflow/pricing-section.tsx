import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For individuals automating their first workflows.",
    price: "$0",
    period: "forever",
    features: [
      "3 active workflows",
      "100 workflow runs / month",
      "5 integrations",
      "Basic workflow logs",
    ],
    featured: false,
  },
  {
    name: "Growth",
    description: "For teams building automation into their daily work.",
    price: "$29",
    period: "per user / month",
    features: [
      "Unlimited workflows",
      "10,000 workflow runs / month",
      "50+ integrations",
      "AI-powered actions",
      "Advanced workflow logs",
      "Team collaboration",
    ],
    featured: true,
  },
  {
    name: "Scale",
    description: "For organizations running critical workflows at scale.",
    price: "$99",
    period: "per user / month",
    features: [
      "Unlimited workflows",
      "Unlimited workflow runs",
      "All integrations",
      "Advanced AI actions",
      "Priority execution",
      "SSO & advanced security",
    ],
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section className="border-t border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[#8EA2FF]">
            Pricing
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Start small. Automate more.
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-500">
            Simple plans that scale with the workflows your team relies on.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 sm:p-8 ${
                plan.featured
                  ? "border-[#5B7CFF]/40 bg-[#111318]"
                  : "border-white/[0.08] bg-[#0F1012]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-6 rounded-full border border-[#5B7CFF]/30 bg-[#111318] px-3 py-1 text-xs font-medium text-[#8EA2FF]">
                  Most popular
                </div>
              )}

              <div>
                <h3 className="text-lg font-medium text-zinc-100">
                  {plan.name}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-zinc-500">
                  {plan.description}
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-zinc-100">
                    {plan.price}
                  </span>

                  <span className="pb-1 text-xs text-zinc-500">
                    {plan.period}
                  </span>
                </div>
              </div>

              <button
                className={`mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  plan.featured
                    ? "bg-zinc-100 text-zinc-950 hover:bg-white"
                    : "border border-white/[0.1] text-zinc-300 hover:bg-white/[0.04] hover:text-zinc-100"
                }`}
              >
                {plan.name === "Starter"
                  ? "Get started"
                  : plan.name === "Growth"
                    ? "Start free trial"
                    : "Talk to sales"}
              </button>

              <div className="my-8 h-px bg-white/[0.06]" />

              <p className="text-xs font-medium uppercase tracking-wide text-zinc-600">
                Includes
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

        <p className="mt-8 text-center text-xs text-zinc-600">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}