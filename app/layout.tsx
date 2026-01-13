import * as React from "react";
import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

const inter = Manrope({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700'] });

export const metadata: Metadata = {
  title: 'JP Malone Construction INC. | Custom home design and build firm',
  description: '\u200bJP Malone Construction INC. is a Scottsdale, Arizona based custom home design and build firm. Since 1983, we have specialized in designing, and building unique, one-of-a-kind custom homes, in...',
  keywords: ['custom home', 'Scottsdale', 'custom home builder', 'JP Malone'],
  authors: [{ name: 'JP Malone Construction INC.' }],
  openGraph: {
    title: 'JP Malone Construction INC. | Custom home design and build firm',
    description: '\u200bJP Malone Construction INC. is a Scottsdale, Arizona based custom home design and build firm. Since 1983, we have specialized in designing, and building unique, one-of-a-kind custom homes, in...',
    type: 'website',
    locale: 'en_US',
    siteName: 'JP Malone Construction INC.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JP Malone Construction INC. | Custom home design and build firm',
    description: '\u200bJP Malone Construction INC. is a Scottsdale, Arizona based custom home design and build firm. Since 1983, we have specialized in designing, and building unique, one-of-a-kind custom homes, in...'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'JP Malone Construction INC.',
    description: 'JP Malone Construction INC. is a Scottsdale, Arizona based custom home design and build firm. Since 1983, we have specialized in designing, and building unique, one-of-a-kind custom homes.',
    url: 'https://www.jpmalone.com'
  };

  return (
    <html lang="en" className={`${inter.variable}`}>
      <head />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
