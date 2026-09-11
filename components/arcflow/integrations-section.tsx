import {
  ArrowUpRight,
  Database,
  FileText,
  Globe,
  Mail,
  MessageSquare,
  Users,
  Code2,
} from "lucide-react";

const integrations = [
  {
    name: "HubSpot",
    description: "CRM & customer data",
    icon: Users,
  },
  {
    name: "Gmail",
    description: "Email & communication",
    icon: Mail,
  },
  {
    name: "Slack",
    description: "Team notifications",
    icon: MessageSquare,
  },
  {
    name: "Notion",
    description: "Knowledge & documents",
    icon: FileText,
  },
  {
    name: "PostgreSQL",
    description: "Structured data",
    icon: Database,
  },
  {
    name: "GitHub",
    description: "Code & development",
    icon: Code2,
  },
  {
    name: "Webhooks",
    description: "Connect anything",
    icon: Globe,
  },
  {
    name: "More tools",
    description: "Growing every week",
    icon: ArrowUpRight,
  },
];

export function IntegrationsSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#09090B]/30 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[#8EA2FF]">Integrations</p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            Your tools. One connected system.
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-500">
            Connect the systems your team already depends on and let
            information move between them automatically.
          </p>
        </div>

        {/* Integration grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration) => {
            const Icon = integration.icon;

            return (
              <div
                key={integration.name}
                className="group bg-[#0F1012]/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-[#121316]/70"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                    <Icon
                      size={18}
                      className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200"
                    />
                  </div>

                  <ArrowUpRight
                    size={14}
                    className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-400"
                  />
                </div>

                <h3 className="mt-6 text-sm font-medium text-zinc-200">
                  {integration.name}
                </h3>

                <p className="mt-1.5 text-xs text-zinc-500">
                  {integration.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex items-center justify-center gap-3 text-xs text-zinc-600">
          <span className="h-px w-8 bg-white/[0.08]" />
          Connect your stack without changing the way you work.
          <span className="h-px w-8 bg-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}