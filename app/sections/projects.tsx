'use client';

import React, { useMemo, useState } from 'react';
import { Brain, Cpu, Github, Zap } from 'lucide-react';
import type { Profile, Project, ProjectCategory } from '../data/portfolio';
import { SectionTitle } from '../components/section-title';

type ProjectsSectionProps = {
  profile: Profile;
  projects: Project[];
};

type Tab = 'all' | ProjectCategory;

export function ProjectsSection({ profile, projects }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<Tab>('all');

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return projects;
    return projects.filter((p) => p.category === activeTab);
  }, [activeTab, projects]);

  return (
    <section id="projects" className="relative z-10 py-24 px-6 bg-slate-900/10">
      <div className="container mx-auto">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle title="Creations" subtitle="Engineering Portfolio" />
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {(['all', 'hardware', 'ai', 'embedded'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-500 hover:text-slate-200'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={`${project.repo}-${idx}`}
              className="group bg-slate-900/40 backdrop-blur-sm rounded-[2rem] border border-slate-800/40 p-8 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`p-3 rounded-2xl ${
                    project.category === 'hardware'
                      ? 'bg-indigo-500/10 text-indigo-400'
                      : project.category === 'ai'
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'bg-emerald-500/10 text-emerald-400'
                  }`}
                >
                  {project.category === 'hardware' ? (
                    <Cpu size={24} />
                  ) : project.category === 'ai' ? (
                    <Brain size={24} />
                  ) : (
                    <Zap size={24} />
                  )}
                </div>
                <a
                  href={`${profile.github}/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-slate-800 rounded-lg text-slate-500 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1 font-light">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-800/50 text-slate-500 border border-slate-700/40 uppercase tracking-tighter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
