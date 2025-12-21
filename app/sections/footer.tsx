import React from 'react';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import type { Profile } from '../data/portfolio';
import { SocialIcon } from '../components/social-icon';

type FooterSectionProps = {
  profile: Profile;
};

export function FooterSection({ profile }: FooterSectionProps) {
  return (
    <footer className="relative z-10 py-24 px-6 border-t border-slate-900 mt-20">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-7xl font-black mb-12 text-white leading-tight">
          Engineering the Future.
        </h2>
        <div className="flex flex-col items-center gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-4 text-xl md:text-2xl font-bold text-slate-300 hover:text-white transition-all"
          >
            <div className="p-4 bg-blue-600 rounded-full text-white shadow-xl shadow-blue-900/20 group-hover:scale-110 transition-transform">
              <Mail />
            </div>
            {profile.email}
          </a>
          <div className="flex gap-6 mt-4">
            <SocialIcon href={profile.github} icon={<Github size={22} />} />
            <SocialIcon href={profile.linkedin} icon={<Linkedin size={22} />} />
            <SocialIcon
              href="/cv.pdf"
              icon={<FileText size={22} />}
              download="Warren-Jayakumar-CV.pdf"
              ariaLabel="Download CV"
            />
          </div>
          <p className="mt-20 text-slate-600 font-mono text-[10px] uppercase tracking-[0.4em]">
            Designed with Precision • © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
