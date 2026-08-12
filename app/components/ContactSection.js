'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ContactSection() {
  const pathname = usePathname();
  if (pathname === '/contact') return null;

  return (
    <section className="border-t border-[#ded5cf] bg-[#241b1b] py-16 text-white sm:py-20">
      <div className="site-container grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9a86a]">Custom websites</p>
          <h2 className="section-title text-[#fffaf5]">Need a custom website?</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#cfc0ba]">
            Send us the pages, features, and timeline you need. We will reply with next steps.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-[#fffaf5] px-7 py-3 text-sm font-bold text-[#431717] transition hover:bg-[#efe8df]">
            Request a website <span className="ml-3">↗</span>
          </Link>
          <a href="mailto:aya.yakoulti1999@gmail.com" className="inline-flex min-h-12 items-center justify-center border border-white/20 px-7 py-3 text-sm font-bold text-[#eee3de] transition hover:border-white/50">
            Send an email
          </a>
        </div>
      </div>
    </section>
  );
}
