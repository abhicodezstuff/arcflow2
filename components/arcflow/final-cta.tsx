import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="border-t border-white/[0.06] bg-[#09090B]/30 py-20 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1012]/60 px-6 py-16 text-center backdrop-blur-sm sm:px-10 sm:py-20">
          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
              <Sparkles size={18} className="text-[#8EA2FF]" />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl lg:text-5xl">
              Stop moving information by hand.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
              Connect your tools, automate the repetitive work, and give your
              team more time to focus on what actually matters.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-zinc-100 px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white">
                Start building free
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>

              <button className="inline-flex h-11 items-center justify-center rounded-lg border border-white/[0.1] px-5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/[0.04] hover:text-zinc-100">
                Talk to our team
              </button>
            </div>

            <p className="mt-5 text-xs text-zinc-600">
              No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}