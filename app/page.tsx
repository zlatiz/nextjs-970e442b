import Image from 'next/image';
import type { ReactElement } from 'react';

const IMAGES: { src: string; alt: string; w: number; h: number }[] = [
  { src: 'https://www.jpmalone.com/uploads/1/0/9/7/109792963/kitchen_orig.jpg', alt: 'Southwest Kitchen with granite counter tops', w: 1200, h: 800 },
  { src: 'https://www.jpmalone.com/uploads/1/0/9/7/109792963/1_orig.jpg', alt: 'Interior view', w: 1200, h: 800 },
  { src: 'https://www.jpmalone.com/uploads/1/0/9/7/109792963/2019-best-of-houzz-badge.jpg', alt: 'Best of Houzz badge', w: 800, h: 800 },
  { src: 'https://www.jpmalone.com/uploads/1/0/9/7/109792963/best-in-american-living.jpeg', alt: 'Best in American Living badge', w: 800, h: 800 },
  { src: 'https://www.jpmalone.com/uploads/1/0/9/7/109792963/correct.png', alt: 'Accreditation', w: 800, h: 800 },
  { src: 'https://www.jpmalone.com/uploads/1/0/9/7/109792963/houzz-badge.gif', alt: 'Houzz badge gif', w: 600, h: 600 },
  { src: 'https://www.jpmalone.com/uploads/1/0/9/7/109792963/published/jpm-logo-jpg.jpeg?1501880811', alt: 'JP Malone logo', w: 600, h: 200 },
  { src: 'https://www.jpmalone.com/uploads/1/0/9/7/109792963/background-images/1937660504.jpg', alt: 'Hero background', w: 1600, h: 900 },
  { src: 'https://www.jpmalone.com/uploads/1/0/9/7/109792963/2019-best-of-houzz-badge_orig.jpg', alt: 'Houzz badge original', w: 800, h: 800 },
  { src: 'https://www.jpmalone.com/uploads/1/0/9/7/109792963/abbpage_orig.jpg', alt: 'ABB publication', w: 800, h: 1000 },
  { src: 'https://www.jpmalone.com/uploads/1/0/9/7/109792963/houzz-badge_orig.gif', alt: 'Houzz badge original gif', w: 200, h: 200 },
  { src: 'https://cdn2.editmysite.com/fonts/wIcons/wicons.svg?buildTime=1756835115#wicons', alt: 'Site icons', w: 400, h: 200 },
  { src: 'https://cdn2.editmysite.com/fonts/wSocial/wsocial.svg?buildTime=1756835115#wsocial', alt: 'Social icons', w: 400, h: 200 },
  { src: '/generated/generated-hero-1768321544714.png', alt: 'Generated hero', w: 1600, h: 900 },
  { src: '/generated/generated-portfolio_interior_living-1768321574210.png', alt: 'Generated interior living', w: 1200, h: 900 }
];

export default function Page(): ReactElement {
  const safe = (u: string) => encodeURI(u);

  return (
    <>
      <section id="hero" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">JP Malone Construction INC.</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Home is where we make it yours!</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              ​JP Malone Construction INC. is a Scottsdale, Arizona based custom home design and build firm. Since 1983, we have specialized in designing, and building unique, one-of-a-kind custom homes, in Carefree, Cave Creek, Paradise Valley, and Scottsdale, Arizona.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="/contact-us.html" className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90">Contact Us</a>
              <a href="/questionaire.html" className="inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted">Request Questionnaire</a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure className="img-figure">
              <Image src={safe(IMAGES[7].src)} alt={IMAGES[7].alt} width={IMAGES[7].w} height={IMAGES[7].h} className="w-full h-auto rounded-2xl object-cover" unoptimized />
            </figure>

            <div className="grid grid-cols-2 gap-6">
              <div className="hero-image">
                <Image src={safe(IMAGES[0].src)} alt={IMAGES[0].alt} width={IMAGES[0].w} height={IMAGES[0].h} className="w-full h-auto object-cover" unoptimized />
              </div>
              <div className="hero-image">
                <Image src={safe(IMAGES[1].src)} alt={IMAGES[1].alt} width={IMAGES[1].w} height={IMAGES[1].h} className="w-full h-auto object-cover" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Services</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Design & Build — Renovations</h2>
            <p className="mt-4 text-lg text-muted-foreground">Design Services, Build Services, Renovations</p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="rounded-xl border border-border bg-primary/5 p-6">
              <h3 className="text-xl font-semibold">Design Services</h3>
              <p className="mt-2 text-sm text-muted-foreground">As listed on the site: Design Services.</p>
            </article>
            <article className="rounded-xl border border-border bg-primary/5 p-6">
              <h3 className="text-xl font-semibold">Build Services</h3>
              <p className="mt-2 text-sm text-muted-foreground">As listed on the site: Build Services.</p>
            </article>
            <article className="rounded-xl border border-border bg-primary/5 p-6">
              <h3 className="text-xl font-semibold">Renovations</h3>
              <p className="mt-2 text-sm text-muted-foreground">As listed on the site: Renovations.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Home Gallery</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Work & Awards</h2>
            <p className="mt-4 text-lg text-muted-foreground">Gallery and awards from the original site.</p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {(Array.isArray(IMAGES) ? IMAGES : []).map((img) => (
              <figure key={img.src} className="img-figure">
                <Image src={encodeURI(img.src)} alt={img.alt} width={img.w} height={img.h} className="w-full h-auto rounded-xl object-cover transition-transform duration-300 hover:scale-105" unoptimized />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">About</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">JP Malone Construction INC.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Since 1983, we have specialized in designing, and building unique, one-of-a-kind custom homes, in Carefree, Cave Creek, Paradise Valley, and Scottsdale, Arizona.
            </p>
            <blockquote className="mt-8 text-left border-l-4 pl-4 text-muted-foreground">
              "My husband and I could not be more pleased with our home built by JP Malone in 1996. They had wonderful ideas on how to make our desired floor plan better and were a pleasure to work with. The house was completed on time and under budget and the workmanship was first rate. There have been no structural problems with our home in over 20 years, and we have recommended JP Malone to many others" - New Build
            </blockquote>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Contact</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">ADDRESS: 8261 East Evans Rd, Suite 104, Scottsdale, AZ 85260</p>
            <p className="mt-2 text-lg text-muted-foreground">CONTACT (480) 443-0201</p>
            <div className="mt-8">
              <a href="tel:+1-480-443-0201" className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white">Call (480) 443-0201</a>
            </div>
            <address className="mt-6 not-italic text-sm text-muted-foreground">ROC: 081258</address>
          </div>
        </div>
      </section>
    </>
  );
}
