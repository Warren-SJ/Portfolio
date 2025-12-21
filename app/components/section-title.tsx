import React from 'react';

type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center mb-16 text-center">
      <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">{subtitle}</span>
      <h2 className="text-4xl md:text-5xl font-black text-white">{title}</h2>
    </div>
  );
}
