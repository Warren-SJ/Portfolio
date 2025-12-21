'use client';

import React, { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import { NavItem } from '../components/nav-item';

type SiteNavProps = {
  email: string;
};

export function SiteNav({ email }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent tracking-tighter uppercase">
          Warren SJ
        </span>
        <div className="hidden md:flex gap-8">
          <NavItem label="About" target="about" />
          <NavItem label="Experience" target="experience" />
          <NavItem label="Projects" target="projects" />
          <NavItem label="Education" target="education" />
          <NavItem label="Certifications" target="certs" />
        </div>
        <div className="flex gap-4">
          <a
            href={`mailto:${email}`}
            className="p-2 hover:bg-blue-500/20 rounded-full transition-colors text-blue-400"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}
