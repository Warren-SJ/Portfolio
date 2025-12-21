import React from 'react';

type VolunteerSectionProps = {
  text: string;
};

export function VolunteerSection({ text }: VolunteerSectionProps) {
  return (
    <section className="relative z-10 py-12 px-6">
      <div className="container mx-auto text-center">
        <p className="text-slate-600 font-mono text-[10px] tracking-widest uppercase">{text}</p>
      </div>
    </section>
  );
}
