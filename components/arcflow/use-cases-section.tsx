import {
    ArrowUpRight,
    BarChart3,
    Megaphone,
    Settings2,
    ShoppingCart,
    Users,
  } from "lucide-react";
  
  const useCases = [
    {
      icon: Users,
      title: "Sales operations",
      description:
        "Capture new leads, enrich their information, update your CRM, and notify the right person automatically.",
      example: "New lead → Enrich → CRM → Sales alert",
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description:
        "Turn incoming customer signals into campaigns, tasks, and personalized follow-ups without manual coordination.",
      example: "Form submission → Analyze → Segment → Campaign",
    },
    {
      icon: Settings2,
      title: "Operations",
      description:
        "Connect internal systems and automate repetitive processes that keep your team moving between tools.",
      example: "Request → Validate → Route → Complete",
    },
    {
      icon: ShoppingCart,
      title: "Customer workflows",
      description:
        "Automate the repetitive steps that happen after purchases, signups, support requests, and other customer events.",
      example: "Purchase → Update → Notify → Follow up",
    },
    {
      icon: BarChart3,
      title: "Data workflows",
      description:
        "Move structured information between systems and trigger actions when important business conditions change.",
      example: "Data change → Analyze → Transform → Sync",
    },
  ];
  
  export function UseCasesSection() {
    return (
      <section className="border-t border-white/[0.06] py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#8EA2FF]">
              Use cases
            </p>
  
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
              Built around real work.
            </h2>
  
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500">
              From lead management to internal operations, Arcflow handles the
              repetitive steps that slow modern teams down.
            </p>
          </div>
  
          <div className="mt-16 grid gap-4 lg:grid-cols-2">
            {useCases.slice(0, 4).map((useCase) => {
              const Icon = useCase.icon;
  
              return (
                <div
                  key={useCase.title}
                  className="group rounded-2xl border border-white/[0.08] bg-[#0F1012] p-7 transition-colors duration-300 hover:border-white/[0.12] hover:bg-[#121316] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                      <Icon
                        size={18}
                        className="text-zinc-400 transition-colors duration-300 group-hover:text-[#8EA2FF]"
                      />
                    </div>
  
                    <ArrowUpRight
                      size={16}
                      className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-400"
                    />
                  </div>
  
                  <h3 className="mt-7 text-lg font-medium text-zinc-100">
                    {useCase.title}
                  </h3>
  
                  <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-500">
                    {useCase.description}
                  </p>
  
                  <div className="mt-7 rounded-lg border border-white/[0.06] bg-[#09090B] px-4 py-3">
                    <p className="font-mono text-xs text-zinc-500">
                      {useCase.example}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
  
          <div className="mt-4 rounded-2xl border border-white/[0.08] bg-[#0F1012] p-7 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                  <BarChart3 size={18} className="text-zinc-400" />
                </div>
  
                <h3 className="mt-6 text-lg font-medium text-zinc-100">
                  And workflows you haven't thought of yet.
                </h3>
  
                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
                  If a process has a trigger, a decision, and an outcome,
                  there's a good chance Arcflow can automate it.
                </p>
              </div>
  
              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] px-4 py-2.5 text-sm text-zinc-400">
                  Explore possibilities
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  