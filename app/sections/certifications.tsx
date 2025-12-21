import React from 'react';
import { Award, Code, Cpu, ExternalLink, Brain, Microscope, Terminal, Zap } from 'lucide-react';
import type { CertificationGroup, CertificationIcon } from '../data/portfolio';
import { SectionTitle } from '../components/section-title';

type CertificationsSectionProps = {
  certifications: CertificationGroup[];
};

function iconFor(key: CertificationIcon) {
  switch (key) {
    case 'terminal':
      return <Terminal size={14} />;
    case 'cpu':
      return <Cpu size={14} />;
    case 'brain':
      return <Brain size={14} />;
    case 'zap':
      return <Zap size={14} />;
    case 'microscope':
      return <Microscope size={14} />;
    case 'code':
      return <Code size={14} />;
    case 'award':
      return <Award size={14} />;
    default:
      return <Code size={14} />;
  }
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section id="certs" className="relative z-10 py-24 px-6 bg-slate-900/10">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle title="Certifications" subtitle="Credential Catalog" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((group, idx) => (
            <div
              key={`${group.category}-${idx}`}
              className="p-8 bg-slate-900/30 rounded-[2rem] border border-slate-800/40 hover:border-slate-700/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6 text-blue-500">
                <div className="p-2 bg-blue-500/10 rounded-lg">{iconFor(group.icon)}</div>
                <h4 className="text-xs font-black uppercase tracking-widest">{group.category}</h4>
              </div>
              <ul className="space-y-4">
                {group.items.map((cert, i) => (
                  <li key={`${cert.name}-${i}`} className="group/item">
                    {cert.link && cert.link !== '#' ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2 text-[11px] text-slate-400 hover:text-blue-400 transition-colors leading-snug"
                      >
                        <div className="w-1 h-1 rounded-full bg-slate-700 mt-1.5 group-hover/item:bg-blue-500 transition-colors"></div>
                        <span className="flex-1">{cert.name}</span>
                        <ExternalLink
                          size={10}
                          className="opacity-0 group-hover/item:opacity-100 mt-1 transition-opacity shrink-0"
                        />
                      </a>
                    ) : (
                      <div className="flex items-start gap-2 text-[11px] text-slate-400 leading-snug">
                        <div className="w-1 h-1 rounded-full bg-slate-700 mt-1.5"></div>
                        <span className="flex-1">{cert.name}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
