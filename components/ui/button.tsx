"use client";
import * as React from "react";
import type { ReactElement } from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
};

export default function Button({ children, onClick, href, variant = 'primary' }: Props): ReactElement {
  const base = 'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all';
  const cls = variant === 'primary'
    ? `${base} bg-accent text-white hover:bg-accent/90`
    : `${base} border border-border bg-transparent text-foreground hover:bg-muted`;

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
