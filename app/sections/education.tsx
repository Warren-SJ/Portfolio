import React from 'react';
import { GraduationCap } from 'lucide-react';
import type { EducationItem } from '../data/portfolio';
import { SectionTitle } from '../components/section-title';

type EducationSectionProps = {
  education: EducationItem[];
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="relative z-10 py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle title="Education" subtitle="Academic Foundation" />
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <div
              key={`${edu.inst}-${idx}`}
              className="bg-slate-900/30 p-8 rounded-[2rem] border border-slate-800/50 flex gap-6 hover:bg-slate-900/50 transition-colors"
            >
              <div className="p-4 bg-blue-500/10 rounded-2xl h-fit">
                <GraduationCap className="text-blue-400" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.inst}</h3>
                <p className="text-indigo-400 font-medium text-sm mb-1">{edu.degree}</p>
                <p className="text-slate-500 text-xs mb-3 font-mono">
                  {edu.field} • {edu.period}
                </p>
                <span className="text-emerald-400 font-bold text-xs bg-emerald-400/5 px-3 py-1.5 rounded-full border border-emerald-400/20">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
