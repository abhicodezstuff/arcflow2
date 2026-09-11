import {
  ArrowDown,
  ArrowRight,
  Check,
  Database,
  Mail,
  Sparkles,
  Users,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Users,
    label: "Trigger",
    title: "A new lead arrives",
    description:
      "A prospect submits a form and automatically enters the workflow.",
  },
  {
    number: "02",
    icon: Sparkles,
    label: "Arcflow AI",
    title: "Understand the lead",
    description:
      "Arcflow analyzes the company, intent, and available context to determine what happens next.",
  },
  {
    number: "03",
    icon: Database,
    label: "Action",
    title: "Update your systems",
    description:
      "The lead is scored, enriched, and written back to the tools your team already uses.",
  },
  {
    number: "04",
    icon: Mail,
    label: "Outcome",
    title: "Keep the team moving",
    description:
      "A personalized message is sent and high-intent leads are surfaced for your sales team.",
  },
];

export function WorkflowDemo() {
  return (
    <section className="border-t border-white/[0.06] bg-[#09090B]/30 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-medium text-[#8EA2FF]">
              How it works
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
              From trigger to outcome.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-zinc-500 lg:justify-self-end">
            Arcflow connects the small steps between your tools so your team
            can focus on the work that actually requires them.
          </p>
        </div>

        {/* Workflow */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1012]/60">
          {/* Workflow header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4 sm:px-6">
            <div>
              <p className="text-sm font-medium text-zinc-200">
                Lead qualification
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Automatically qualifies and routes new leads
              </p>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-green-500/20 bg-green-500/[0.05] px-3 py-1.5 text-[10px] font-medium text-green-400 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Active
            </div>
          </div>

          {/* Steps */}
          <div className="divide-y divide-white/[0.06]">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isAI = step.label === "Arcflow AI";

              return (
                <div
                  key={step.number}
                  className="group relative grid gap-6 p-6 transition-colors duration-300 hover:bg-white/[0.015] sm:grid-cols-[64px_48px_1fr_24px] sm:items-center sm:px-8 sm:py-7"
                >
                  {/* Number */}
                  <span className="text-xs font-medium text-zinc-700">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border ${
                      isAI
                        ? "border-[#5B7CFF]/30 bg-[#5B7CFF]/10"
                        : "border-white/[0.08] bg-white/[0.03]"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={
                        isAI ? "text-[#8EA2FF]" : "text-zinc-400"
                      }
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[10px] font-medium uppercase tracking-wider ${
                          isAI ? "text-[#8EA2FF]" : "text-zinc-600"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>

                    <h3 className="mt-1 text-sm font-medium text-zinc-100">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:block">
                    {index < steps.length - 1 ? (
                      <ArrowRight
                        size={15}
                        className="text-zinc-700 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    ) : (
                      <Check size={15} className="text-green-500" />
                    )}
                  </div>

                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div className="flex items-center justify-center sm:hidden">
                      <ArrowDown size={15} className="text-zinc-700" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom status */}
          <div className="flex flex-col gap-3 border-t border-white/[0.06] bg-white/[0.015] px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Workflow completed successfully
            </div>

            <span className="text-xs text-zinc-600">
              1.42s execution time
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}