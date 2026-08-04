"use client";

import { type EmailData } from "../data";
import { Mail, User, Clock } from "lucide-react";

interface EmailCardProps {
  data: EmailData;
}

export default function EmailCard({ data }: EmailCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0d0d14] backdrop-blur-md overflow-hidden">
      {/* Email header bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
        </div>
        <span className="text-[10px] text-white/20 font-mono ml-2">
          message.eml
        </span>
      </div>

      {/* Email content */}
      <div className="p-4">
        {/* From */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/30 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <User size={14} className="text-white/50" />
          </div>
          <div>
            <div className="text-sm font-medium text-white/80">{data.sender}</div>
            <div className="text-[11px] text-white/30 mt-0.5">{data.senderRole}</div>
          </div>
          <div className="ml-auto flex items-center gap-1 text-[11px] text-white/20">
            <Clock size={10} />
            <span>2026</span>
          </div>
        </div>

        {/* Subject */}
        <div className="mb-3 pl-11">
          <div className="text-[10px] text-white/25 uppercase tracking-widest mb-1">
            Subject
          </div>
          <div className="text-sm font-semibold text-white/70">{data.subject}</div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.05] mb-3" />

        {/* Preview body */}
        <div className="pl-11">
          <div className="flex items-center gap-2 mb-2">
            <Mail size={11} className="text-white/20" />
            <span className="text-[10px] text-white/20 uppercase tracking-widest">
              Preview
            </span>
          </div>
          <p className="text-sm text-white/50 leading-relaxed italic">
            {data.preview}
          </p>
        </div>
      </div>
    </div>
  );
}
