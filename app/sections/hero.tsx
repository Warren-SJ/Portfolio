import React from 'react';
import { Cpu, Github, Linkedin } from 'lucide-react';
import type { Profile } from '../data/portfolio';
import { SocialIcon } from '../components/social-icon';

type HeroSectionProps = {
  profile: Profile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="relative z-10 pt-48 pb-32 px-6">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative p-1 rounded-full bg-slate-900 border border-slate-800">
            <Cpu size={60} className="text-blue-400 p-2" />
          </div>
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white">
          Warren <span className="text-blue-500">Jayakumar</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl font-light leading-relaxed">
          {profile.title} <span className="text-slate-800 mx-2">/</span>{' '}
          <span className="text-indigo-400">{profile.subtitle}</span>
        </p>
        <div className="flex gap-4">
          <SocialIcon href={profile.github} icon={<Github size={24} />} />
          <SocialIcon href={profile.linkedin} icon={<Linkedin size={24} />} />
        </div>
      </div>
    </section>
  );
}
