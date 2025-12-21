import React from 'react';
import { SectionTitle } from '../components/section-title';
import { ExperienceCard } from '../components/experience-card';
import type { ExperienceItem } from '../data/portfolio';

type ExperienceSectionProps = {
  experience: ExperienceItem[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="relative z-10 py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle title="Experience" subtitle="Industry Journey" />
        <div className="grid md:grid-cols-2 gap-8">
          {experience.map((item) => (
            <ExperienceCard
              key={`${item.company}-${item.period}`}
              company={item.company}
              role={item.role}
              period={item.period}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
