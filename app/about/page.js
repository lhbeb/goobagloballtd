import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'About GOOBA GLOBAL LTD, the digital store operated by RIFTEDCARS LLC, and CEO Aya Yakoulti.',
};

const principles = [
  ['Clear scope', 'We define the pages, features, timeline, and price before work begins.'],
  ['Direct communication', 'You receive clear updates and focused feedback throughout the project.'],
  ['Tested delivery', 'We review layout, responsiveness, and core functionality before delivery.'],
];

export default function AboutPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_.55fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="eyebrow">About</p>
            <h1 className="display-title">Websites and digital products built by GOOBA GLOBAL LTD.</h1>
          </div>
          <p className="body-large">We sell ready-made templates and build custom websites and web apps.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container grid gap-14 lg:grid-cols-[.55fr_1fr] lg:gap-24">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="section-title">Design and development for websites, web apps, and digital products.</h2>
          </div>
          <div className="space-y-7 text-base leading-8 text-[#665b58] sm:text-lg">
            <p>GOOBA GLOBAL LTD sells downloadable templates and provides custom design and development services.</p>
            <p>Our work includes UI/UX design, front-end development, full-stack development, and security-focused implementation.</p>
            <p>GOOBA GLOBAL LTD is operated by <strong className="text-[#302727]">RIFTEDCARS LLC</strong> in Sheridan, Wyoming.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ded5cf] bg-[#efe8df] py-20 sm:py-28">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-20">
            <div className="relative mx-auto w-full max-w-[460px] lg:mx-0">
              <div className="absolute -bottom-4 -left-4 h-full w-full border border-[#b99f91]" aria-hidden="true" />
              <div className="relative aspect-[589/703] overflow-hidden bg-[#9b9189]">
                <Image
                  src="/ayayakoulti.png"
                  alt="Aya Yakoulti, CEO of RIFTEDCARS LLC"
                  fill
                  sizes="(max-width: 1024px) 90vw, 38vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-5 right-0 bg-primary px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                CEO, RIFTEDCARS LLC
              </div>
            </div>

            <div>
              <p className="eyebrow">Leadership</p>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl">Aya Yakoulti</h2>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">CEO, RIFTEDCARS LLC</p>
              <p className="body-large mt-7 max-w-2xl">
                Aya Yakoulti is CEO of RIFTEDCARS LLC, the company that operates GOOBA GLOBAL LTD. She works in web development, UI/UX design, application security, and full-stack web app development.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#746966] sm:text-base">
                She leads the design and development work behind Gooba Global&apos;s products and client projects.
              </p>

              <div className="mt-9 grid border-y border-[#c9bbb3] sm:grid-cols-2 sm:divide-x sm:divide-[#c9bbb3]">
                {[
                  ['01', 'Web development'],
                  ['02', 'UI/UX design'],
                  ['03', 'Security'],
                  ['04', 'Full-stack web apps'],
                ].map(([number, skill], index) => (
                  <div key={skill} className={`flex items-center gap-4 py-4 sm:px-5 ${index < 3 ? 'border-b border-[#c9bbb3]' : ''} ${index === 2 ? 'sm:border-b-0' : ''} ${index % 2 === 0 ? 'sm:pl-0' : ''}`}>
                    <span className="text-[10px] font-bold text-[#a08152]">{number}</span>
                    <span className="text-sm font-bold text-[#302727]">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <Link href="/contact" className="btn-primary">Contact us <span>↗</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container">
          <p className="eyebrow">How we work</p>
          <div className="mt-4 grid border-y border-[#cfc4be] lg:grid-cols-3 lg:divide-x lg:divide-[#cfc4be]">
            {principles.map(([title, copy], index) => (
              <article key={title} className="border-b border-[#cfc4be] py-8 lg:border-b-0 lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <span className="text-[11px] font-bold text-[#a08152]">0{index + 1}</span>
                <h2 className="mt-8 text-3xl">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#746966]">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-10"><Link href="/contact" className="btn-primary">Contact us <span>↗</span></Link></div>
        </div>
      </section>
    </div>
  );
}
