'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  ['Home', '/'],
  ['Products', '/products'],
  ['Services', '/listings'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#fffdf9]/95 backdrop-blur-xl">
      <div className="h-9 bg-[#241b1b] text-[#eee4df]">
        <div className="site-container flex h-full items-center justify-center overflow-hidden text-[10px] font-semibold uppercase tracking-[0.1em] sm:text-xs sm:tracking-[0.14em]">
          <div className="contact-rotator w-full text-center">
            <div className="contact-rotator-track whitespace-nowrap">
              <a href="mailto:aya.yakoulti1999@gmail.com" className="contact-rotator-item transition hover:text-white">
                <span className="text-[#c6a46e]">For inquiries</span>&nbsp;—&nbsp; aya.yakoulti1999@gmail.com
              </a>
              <a href="tel:+12512834593" className="contact-rotator-item transition hover:text-white">
                <span className="text-[#c6a46e]">Call us</span>&nbsp;—&nbsp; +1 251-283-4593
              </a>
              <span className="contact-rotator-item contact-rotator-duplicate" aria-hidden="true">
                <span className="text-[#c6a46e]">For inquiries</span>&nbsp;—&nbsp; aya.yakoulti1999@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="site-container flex h-[76px] items-center justify-between" aria-label="Primary navigation">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Gooba Global LTD home">
          <Image
            src="/logo.svg"
            alt="Gooba Global LTD logo"
            width={523}
            height={193}
            priority
            className="h-[52px] w-auto sm:h-[56px]"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`relative py-2 text-[13px] font-bold transition ${active ? 'text-primary' : 'text-[#514746] hover:text-primary'}`}
              >
                {label}
                {active && <span className="absolute inset-x-0 -bottom-0.5 h-px bg-primary" />}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary min-h-10 px-5 py-2">Request a website</Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-[#d8cec8] text-[#302727] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#ded5cf] bg-[#fffdf9] lg:hidden">
          <div className="site-container py-5">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-[#ece5e0] py-3.5 text-sm font-bold">
                {label}<span className="text-primary">↗</span>
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-5 w-full">Request a website</Link>
          </div>
        </div>
      )}
    </header>
  );
}
