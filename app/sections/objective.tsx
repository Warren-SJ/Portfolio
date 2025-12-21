import React from 'react';
import { Layers } from 'lucide-react';

type ObjectiveSectionProps = {
  objective: string;
};

export function ObjectiveSection({ objective }: ObjectiveSectionProps) {
  return (
    <section id="about" className="relative z-10 py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-slate-900/30 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-800/50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-slate-800/20 group-hover:text-blue-500/10 transition-colors">
            <Layers size={120} />
          </div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-black text-white">Objective</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed font-light italic max-w-2xl">"{objective}"</p>
          </div>
        </div>
      </div>
    </section>
  );
}
