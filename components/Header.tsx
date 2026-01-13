import Link from 'next/link';
import Image from 'next/image';
import type { ReactElement } from 'react';

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

export default function Header(): ReactElement {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-lg z-50 h-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <a className="flex items-center gap-3">
                <Image src={encodeURI('https://www.jpmalone.com/uploads/1/0/9/7/109792963/published/jpm-logo-jpg.jpeg?1501880811')} alt="JP Malone" width={140} height={40} unoptimized />
                <span className="sr-only">JP Malone</span>
              </a>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {(Array.isArray(NAV) ? NAV : []).map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-foreground hover:text-accent">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white">Inquire</a>
          </nav>

          {/* Mobile: simple CSS-driven menu */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none">Menu</summary>
              <div className="absolute right-0 mt-2 w-48 rounded-md border border-border bg-background p-3 shadow-md">
                {(Array.isArray(NAV) ? NAV : []).map((link) => (
                  <a key={link.href} href={link.href} className="block py-2 text-sm">{link.label}</a>
                ))}
                <a href="#contact" className="block mt-2 py-2 text-sm font-medium">Contact</a>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
