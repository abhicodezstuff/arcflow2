import {
    Activity,
    ArrowRight,
    Check,
    Clock3,
    Database,
    Mail,
    Plus,
    Settings,
    Sparkles,
    Users,
    Zap,
  } from "lucide-react";
  
  export function ProductPreview() {
    return (
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Section heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-[#8EA2FF]">
              Built for the way work actually happens
            </p>
  
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
              One place to automate your workflows.
            </h2>
  
            <p className="mt-4 text-base leading-7 text-zinc-500">
              Design, monitor, and improve your automations without jumping
              between a dozen different tools.
            </p>
          </div>
  
          {/* Product window */}
          <div className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0F1012] shadow-2xl shadow-black/30">
            {/* Top bar */}
            <div className="flex h-12 items-center justify-between border-b border-white/[0.06] px-4 sm:px-5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                </div>
  
                <div className="hidden h-5 w-px bg-white/[0.08] sm:block" />
  
                <span className="text-xs font-medium text-zinc-400">
                  Arcflow
                </span>
              </div>
  
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                All systems operational
              </div>
            </div>
  
            <div className="flex min-h-[560px]">
              {/* Sidebar */}
              <aside className="hidden w-56 shrink-0 border-r border-white/[0.06] p-4 md:block">
                <div className="mb-6 flex items-center gap-2 px-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5B7CFF]/10">
                    <Zap size={14} className="text-[#7D96FF]" />
                  </div>
  
                  <span className="text-sm font-semibold text-zinc-200">
                    Arcflow
                  </span>
                </div>
  
                <nav className="space-y-1">
                  <div className="flex items-center gap-3 rounded-lg bg-white/[0.05] px-3 py-2.5 text-sm text-zinc-100">
                    <Activity size={15} />
                    Overview
                  </div>
  
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-500">
                    <Zap size={15} />
                    Workflows
                  </div>
  
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-500">
                    <Database size={15} />
                    Integrations
                  </div>
  
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-500">
                    <Clock3 size={15} />
                    Activity
                  </div>
                </nav>
  
                <div className="mt-8 border-t border-white/[0.06] pt-5">
                  <p className="px-3 text-[10px] font-medium uppercase tracking-wider text-zinc-600">
                    Workspace
                  </p>
  
                  <div className="mt-3 flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-500">
                    <Settings size={15} />
                    Settings
                  </div>
                </div>
              </aside>
  
              {/* Main content */}
              <div className="min-w-0 flex-1">
                {/* Dashboard header */}
                <div className="flex flex-col gap-4 border-b border-white/[0.06] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div>
                    <p className="text-xs text-zinc-500">Workspace</p>
  
                    <h3 className="mt-1 text-lg font-medium text-zinc-100">
                      Good morning, Alex
                    </h3>
                  </div>
  
                  <button className="inline-flex w-fit items-center gap-2 rounded-lg bg-zinc-100 px-3.5 py-2 text-xs font-medium text-zinc-950">
                    <Plus size={14} />
                    New workflow
                  </button>
                </div>
  
                <div className="space-y-6 p-5 sm:p-6">
                  {/* Metrics */}
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-500">
                          Executions
                        </span>
  
                        <Activity size={14} className="text-zinc-600" />
                      </div>
  
                      <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100">
                        12,842
                      </p>
  
                      <p className="mt-1 text-xs text-green-500">
                        +18.4% this month
                      </p>
                    </div>
  
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-500">
                          Successful
                        </span>
  
                        <Check size={14} className="text-zinc-600" />
                      </div>
  
                      <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100">
                        99.2%
                      </p>
  
                      <p className="mt-1 text-xs text-zinc-500">
                        Last 30 days
                      </p>
                    </div>
  
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-500">
                          Time saved
                        </span>
  
                        <Clock3 size={14} className="text-zinc-600" />
                      </div>
  
                      <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100">
                        184h
                      </p>
  
                      <p className="mt-1 text-xs text-zinc-500">
                        This month
                      </p>
                    </div>
                  </div>
  
                  {/* Workflow */}
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.02]">
                    <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-4">
                      <div>
                        <p className="text-sm font-medium text-zinc-200">
                          Lead qualification
                        </p>
  
                        <p className="mt-1 text-xs text-zinc-500">
                          Updated 2 minutes ago
                        </p>
                      </div>
  
                      <span className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/[0.06] px-2.5 py-1 text-[10px] font-medium text-green-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        Active
                      </span>
                    </div>
  
                    {/* Workflow nodes */}
                    <div className="space-y-3 p-4">
                      <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-[#151619] p-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                          <Users size={15} className="text-zinc-400" />
                        </div>
  
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-zinc-200">
                            New lead created
                          </p>
  
                          <p className="mt-0.5 text-[11px] text-zinc-500">
                            HubSpot
                          </p>
                        </div>
  
                        <Check
                          size={14}
                          className="ml-auto text-green-500"
                        />
                      </div>
  
                      <div className="flex justify-center">
                        <ArrowRight
                          size={14}
                          className="rotate-90 text-zinc-700"
                        />
                      </div>
  
                      <div className="flex items-center gap-3 rounded-lg border border-[#5B7CFF]/25 bg-[#10121A] p-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5B7CFF]/10">
                          <Sparkles
                            size={15}
                            className="text-[#7D96FF]"
                          />
                        </div>
  
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-zinc-200">
                            Analyze lead
                          </p>
  
                          <p className="mt-0.5 text-[11px] text-zinc-500">
                            Arcflow AI
                          </p>
                        </div>
  
                        <span className="ml-auto text-[10px] text-[#8EA2FF]">
                          Running
                        </span>
                      </div>
  
                      <div className="flex justify-center">
                        <ArrowRight
                          size={14}
                          className="rotate-90 text-zinc-700"
                        />
                      </div>
  
                      <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-[#151619] p-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                          <Mail size={15} className="text-zinc-400" />
                        </div>
  
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-zinc-200">
                            Send personalized email
                          </p>
  
                          <p className="mt-0.5 text-[11px] text-zinc-500">
                            Gmail
                          </p>
                        </div>
  
                        <Check
                          size={14}
                          className="ml-auto text-green-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Caption */}
            <div className="border-t border-white/[0.06] px-5 py-4 text-center">
              <p className="text-xs text-zinc-500">
                Your entire automation layer, visible at a glance.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }