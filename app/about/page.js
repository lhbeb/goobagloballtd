import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'Learn about Gooba Global LTD, its leadership, and the company managing the store.',
};

const principles = [
  ['Clarity before decoration', 'Every page should help a visitor understand the offer and make a confident next decision.'],
  ['Useful collaboration', 'We keep feedback focused, explain tradeoffs, and maintain a visible path from brief to launch.'],
  ['Care in the details', 'Typography, responsive behavior, content structure, and performance all shape credibility.'],
];

export default function AboutPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_.55fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="eyebrow">About Gooba Global</p>
            <h1 className="display-title">Small enough to stay focused. Built to work globally.</h1>
          </div>
          <p className="body-large">Gooba Global LTD is a digital store and studio creating websites, templates, and interface products for modern businesses.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container grid gap-14 lg:grid-cols-[.55fr_1fr] lg:gap-24">
          <div>
            <p className="eyebrow">Our point of view</p>
            <h2 className="section-title">Good digital work should make the business easier to understand.</h2>
          </div>
          <div className="space-y-7 text-base leading-8 text-[#665b58] sm:text-lg">
            <p>We started from a practical belief: a website should do more than look current. It should establish trust, explain the offer, and make the next step obvious.</p>
            <p>That approach shapes both our custom website work and the digital products sold through our store. We value structured content, confident visual systems, responsive execution, and honest communication.</p>
            <p>The GOOBA GLOBAL LTD store is managed by <strong className="text-[#302727]">RIFTEDCARS LLC</strong> from Sheridan, Wyoming, United States.</p>
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
                  alt="Aya Yakoulti, CEO of Gooba Global LTD"
                  fill
                  sizes="(max-width: 1024px) 90vw, 38vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-5 right-0 bg-primary px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                Founder-led digital expertise
              </div>
            </div>

            <div>
              <p className="eyebrow">Meet the CEO</p>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl">Aya Yakoulti</h2>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">Chief Executive Officer · Digital Builder</p>
              <p className="body-large mt-7 max-w-2xl">
                Aya Yakoulti leads Gooba Global LTD and brings together strategy, design, development, and security to build dependable digital experiences. She works across the full product journey—from shaping an intuitive interface to engineering the website or web application behind it.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#746966] sm:text-base">
                As a web developer, UI/UX designer, security professional, and full-stack builder, Aya focuses on creating digital products that feel clear to use, professional to present, and thoughtfully constructed from front end to back end.
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
                <Link href="/contact" className="btn-primary">Start a conversation <span>↗</span></Link>
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
          <div className="mt-10"><Link href="/contact" className="btn-primary">Work with us <span>↗</span></Link></div>
        </div>
      </section>
    </div>
  );
}
