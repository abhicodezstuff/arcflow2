import {
    Brain,
    GitBranch,
    Layers3,
    ShieldCheck,
    Sparkles,
    Zap,
  } from "lucide-react";
  
  const features = [
    {
      icon: GitBranch,
      title: "Visual workflows",
      description:
        "Build multi-step automations by connecting triggers, logic, AI actions, and destinations in one clear workflow.",
    },
    {
      icon: Brain,
      title: "AI-powered decisions",
      description:
        "Let Arcflow analyze information, classify incoming data, and decide what should happen next.",
    },
    {
      icon: Layers3,
      title: "Connect your stack",
      description:
        "Bring your existing tools together and move information between them without rebuilding your entire stack.",
    },
    {
      icon: Zap,
      title: "Run automatically",
      description:
        "Once a workflow is live, Arcflow handles repetitive steps in the background so your team doesn't have to.",
    },
    {
      icon: ShieldCheck,
      title: "Built for reliability",
      description:
        "Track executions, inspect failures, and understand exactly what happened at every step of a workflow.",
    },
    {
      icon: Sparkles,
      title: "Improve continuously",
      description:
        "See where your workflows spend time and refine them as your business processes evolve.",
    },
  ];
  
  export function FeaturesSection() {
    return (
      <section className="border-t border-white/[0.06] py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#8EA2FF]">
              Everything in one flow
            </p>
  
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
              Automation that stays out of your way.
            </h2>
  
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500">
              Arcflow gives your team the building blocks to automate repetitive
              work without adding another layer of complexity.
            </p>
          </div>
  
          {/* Feature grid */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="group bg-[#0F1012] p-7 transition-colors duration-300 hover:bg-[#121316] sm:p-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] transition-colors duration-300 group-hover:border-[#5B7CFF]/30 group-hover:bg-[#5B7CFF]/10">
                    <Icon
                      size={18}
                      className="text-zinc-400 transition-colors duration-300 group-hover:text-[#8EA2FF]"
                    />
                  </div>
  
                  <h3 className="mt-6 text-base font-medium text-zinc-100">
                    {feature.title}
                  </h3>
  
                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }