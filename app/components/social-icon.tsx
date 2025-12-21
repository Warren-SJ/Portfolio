import React from 'react';

type SocialIconProps = {
  href: string;
  icon: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
  download?: boolean | string;
  ariaLabel?: string;
};

export function SocialIcon({ href, icon, target, download, ariaLabel }: SocialIconProps) {
  const resolvedTarget: React.HTMLAttributeAnchorTarget | undefined = download ? undefined : target ?? '_blank';
  const resolvedRel = resolvedTarget === '_blank' ? 'noopener noreferrer' : undefined;

  return (
    <a
      href={href}
      target={resolvedTarget}
      rel={resolvedRel}
      download={download ? (typeof download === 'string' ? download : true) : undefined}
      aria-label={ariaLabel}
      className="p-4 bg-slate-900 hover:bg-slate-800 rounded-2xl border border-slate-800 text-slate-400 hover:text-white transition-all hover:scale-110"
    >
      {icon}
    </a>
  );
}
