"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  Check,
  Database,
  Mail,
  Sparkles,
  Users,
} from "lucide-react";

export function WorkflowPreview() {
    return (
        <div
          id="workflow"
          className="relative mx-auto mt-20 w-full max-w-5xl"
        >
      <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B7CFF]/10 blur-3xl" />

      <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0F1012] shadow-2xl shadow-black/40">
        {/* Header */}
        <div className="flex h-12 items-center justify-between border-b border-white/[0.06] px-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#5B7CFF]" />
            <span className="text-xs font-medium text-zinc-300">
              Lead qualification
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Active
          </div>
        </div>

        {/* Workflow */}
        <div className="relative p-8 sm:p-12">
          <div className="grid gap-4 md:grid-cols-3 md:items-center">
            {/* Trigger */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/[0.08] bg-[#151619] p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                  <Users size={17} className="text-zinc-300" />
                </div>

                <span className="text-[11px] text-zinc-500">
                  TRIGGER
                </span>
              </div>

              <p className="text-sm font-medium text-zinc-100">
                New lead created
              </p>

              <p className="mt-1 text-xs leading-5 text-zinc-500">
                A new prospect enters your CRM.
              </p>
            </motion.div>

            {/* Arcflow AI */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative rounded-xl border border-[#5B7CFF]/30 bg-[#10121A] p-5"
            >
              {/* Active indicator */}
              <motion.div
                animate={{
                  opacity: [0.35, 0.8, 0.35],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full bg-[#5B7CFF]"
              />

              <div className="absolute -top-2.5 left-5 rounded-full border border-[#5B7CFF]/30 bg-[#10121A] px-2 py-0.5 text-[10px] font-medium text-[#8EA2FF]">
                Arcflow AI
              </div>

              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#5B7CFF]/10">
                <Sparkles size={17} className="text-[#7D96FF]" />
              </div>

              <p className="text-sm font-medium text-zinc-100">
                Analyze lead
              </p>

              <p className="mt-1 text-xs leading-5 text-zinc-500">
                AI scores intent and identifies the next action.
              </p>
            </motion.div>

            {/* CRM */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl border border-white/[0.08] bg-[#151619] p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                  <Database size={17} className="text-zinc-300" />
                </div>
              </div>

              <p className="text-sm font-medium text-zinc-100">
                Update CRM
              </p>

              <p className="mt-1 text-xs leading-5 text-zinc-500">
                Store the score and trigger the sales workflow.
              </p>
            </motion.div>
          </div>

          {/* Connection line */}
          <div className="my-8 hidden items-center justify-center md:flex">
            <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-[#5B7CFF]/40 to-transparent" />
          </div>

          {/* Results */}
          <div className="grid gap-3 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08]">
                <Mail size={16} className="text-zinc-400" />
              </div>

              <div>
                <p className="text-sm font-medium text-zinc-200">
                  Personalized email
                </p>

                <p className="text-xs text-zinc-500">
                  Automatically generated and sent
                </p>
              </div>

              <Check size={16} className="ml-auto text-green-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08]">
                <Users size={16} className="text-zinc-400" />
              </div>

              <div>
                <p className="text-sm font-medium text-zinc-200">
                  Sales notification
                </p>

                <p className="text-xs text-zinc-500">
                  High-intent lead sent to your team
                </p>
              </div>

              <Check size={16} className="ml-auto text-green-500" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-zinc-500">
        <ArrowDown size={13} />
        One workflow. Zero manual handoffs.
      </div>
    </div>
  );
}