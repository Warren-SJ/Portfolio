import React from 'react';
import { Briefcase } from 'lucide-react';

type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  details: string[];
};

export function ExperienceCard({ company, role, period, details }: ExperienceCardProps) {
  return (
    <div className="bg-slate-900/40 p-8 rounded-[2rem] border border-slate-800/50 hover:border-slate-700 transition-all group relative overflow-hidden">
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{company}</h3>
          <p className="text-blue-400 font-medium text-sm">{role}</p>
        </div>
        <span className="text-[10px] font-black text-slate-600 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 uppercase tracking-widest">
          {period}
        </span>
      </div>
      <ul className="space-y-3 relative z-10">
        {details.map((d: string, i: number) => (
          <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed font-light">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2 shrink-0"></div>
            {d}
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
        <Briefcase size={80} />
      </div>
    </div>
  );
}
