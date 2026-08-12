import Image from 'next/image';
import Link from 'next/link';

const nav = [
  ['Products', '/products'],
  ['Services', '/listings'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function Footer() {
  return (
    <footer className="bg-[#171111] text-[#d5c7c1]">
      <div className="site-container py-14 sm:py-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.35fr_.65fr_.65fr]">
          <div>
            <div className="inline-flex bg-[#fffdf9] p-3">
              <Image src="/logo.png" alt="Gooba Global LTD logo" width={535} height={204} className="h-14 w-auto" />
            </div>
            <p className="mt-6 max-w-md text-sm leading-7">
              Gooba Global LTD sells digital products and provides custom website design and development. The store is operated by RIFTEDCARS LLC. Aya Yakoulti is CEO of RIFTEDCARS LLC.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9a86a]">Explore</p>
            <ul className="space-y-3 text-sm">
              {nav.map(([label, href]) => <li key={href}><Link href={href} className="transition hover:text-white">{label}</Link></li>)}
              <li><Link href="/terms" className="transition hover:text-white">Terms</Link></li>
              <li><Link href="/privacy" className="transition hover:text-white">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9a86a]">Contact</p>
            <div className="space-y-3 text-sm leading-6">
              <p className="font-bold text-[#fffdf9]">RIFTEDCARS LLC</p>
              <p>30 North Gould Street<br />Sheridan, WY 82801<br />United States of America</p>
              <a href="mailto:aya.yakoulti1999@gmail.com" className="block break-all transition hover:text-white">aya.yakoulti1999@gmail.com</a>
              <a href="tel:+12512834593" className="block transition hover:text-white">+1 251-283-4593</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs leading-5 text-[#988984] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Gooba Global LTD ( RIFTEDCARS LLC ) . All rights reserved.</p>
          <a href="https://goobaglobaltd.com/" className="transition hover:text-white">goobaglobaltd.com</a>
        </div>
      </div>
    </footer>
  );
}
