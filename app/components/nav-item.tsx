import React from 'react';

type NavItemProps = {
  label: string;
  target: string;
};

export function NavItem({ label, target }: NavItemProps) {
  return (
    <a
      href={`#${target}`}
      className="text-slate-500 hover:text-blue-400 transition-colors font-bold text-xs uppercase tracking-widest"
    >
      {label}
    </a>
  );
}
