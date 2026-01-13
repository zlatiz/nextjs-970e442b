"use client";
import type { ReactElement } from 'react';

type Props = {
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
};

export default function Input({ id, name, placeholder, value, onChange }: Props): ReactElement {
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="w-full rounded-md border border-border px-4 py-2 text-sm"
    />
  );
}
