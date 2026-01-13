"use client";
import * as React from "react";
import type { ReactElement } from 'react';

type Props = { children: React.ReactNode };

export default function Card({ children }: Props): ReactElement {
  return (
    <div className="rounded-xl border border-border bg-primary/5 p-6 shadow-sm">
      {children}
    </div>
  );
}
