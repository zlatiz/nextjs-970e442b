import Image from 'next/image';
import Link from 'next/link';
import type { ReactElement } from 'react';

export default function Footer(): ReactElement {
  const year = 2026;
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image src={encodeURI('https://www.jpmalone.com/uploads/1/0/9/7/109792963/published/jpm-logo-jpg.jpeg?1501880811')} alt="JP Malone logo" width={140} height={40} unoptimized />
          </div>

          <nav className="flex gap-8">
            <div>
              <h4 className="text-sm font-semibold">Services</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li><Link href="/services.html"><a>Design Services</a></Link></li>
                <li><Link href="/services.html"><a>Build Services</a></Link></li>
                <li><Link href="/services.html"><a>Renovations</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li><Link href="/about.html"><a>About</a></Link></li>
                <li><Link href="/awards.html"><a>Awards</a></Link></li>
                <li><Link href="/articles.html"><a>Articles</a></Link></li>
                <li><Link href="/home-gallery.html"><a>Home Gallery</a></Link></li>
              </ul>
            </div>
          </nav>

          <div className="text-sm text-muted-foreground">
            <address>
              8261 East Evans Rd, Suite 104<br />
              Scottsdale, AZ 85260
            </address>
            <div className="mt-2">CONTACT <a href="tel:+1-480-443-0201">(480) 443-0201</a></div>
            <div className="mt-2">ROC: 081258</div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <Image src={encodeURI('https://www.jpmalone.com/uploads/1/0/9/7/109792963/2019-best-of-houzz-badge.jpg')} alt="Best of Houzz" width={80} height={80} unoptimized />
          <Image src={encodeURI('https://www.jpmalone.com/uploads/1/0/9/7/109792963/best-in-american-living.jpeg')} alt="Best in American Living" width={80} height={80} unoptimized />
          <Image src={encodeURI('https://www.jpmalone.com/uploads/1/0/9/7/109792963/abbpage_orig.jpg')} alt="ABB Page" width={80} height={80} unoptimized />
          <Image src={encodeURI('https://www.jpmalone.com/uploads/1/0/9/7/109792963/correct.png')} alt="Certification" width={80} height={80} unoptimized />
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>© {year} JP Malone Construction INC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
