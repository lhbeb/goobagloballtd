import Image from 'next/image';
import Link from 'next/link';
import StripeLogo from './components/StripeLogo';

const services = [
  {
    number: '01',
    title: 'Launch Website',
    price: 'From $650',
    description: 'A focused, credible website for new businesses and lean teams that need to launch with confidence.',
    details: ['Up to 5 core pages', 'Responsive development', 'Search-ready structure', '30 days launch support'],
  },
  {
    number: '02',
    title: 'Growth Website',
    price: 'From $1,250',
    description: 'A broader digital platform for established businesses that need stronger content, conversion, and control.',
    details: ['Up to 10 strategic pages', 'CMS or commerce support', 'Motion and interactions', '60 days launch support'],
  },
];

const products = [
  {
    id: 'logix',
    title: 'Logix — Logistics UI Kit',
    category: 'Figma UI Kit',
    price: '$18',
    image: '/lisitings/Logix/photo1.png',
  },
  {
    id: 'ronel',
    title: 'Ronel — NodeJS Landing Page',
    category: 'Website Template',
    price: '$18',
    image: '/lisitings/Ronel - NodeJs Landing Page Template/photo1.png',
  },
  {
    id: 'webconstruct',
    title: 'WebConstruct — Construction Template',
    category: 'Figma Template',
    price: '$199',
    creator: 'GOOBA GLOBAL LTD',
    image: '/lisitings/WebConstruct/371b406ee08a100ebb1e790373df1135edadca3aaf14b0fe770d84626cd6c200.webp',
  },
  {
    id: 'customwebsite',
    title: 'Custom Website Design',
    category: 'Bespoke Service',
    price: 'From $800',
    image: '/lisitings/Website Design and Development, Custom websites, Business websites, Custom Websites For Business/photo1-thumbnail.webp',
  },
];

const process = [
  ['Discover', 'We clarify the goal, audience, content, and commercial priorities.'],
  ['Design', 'We shape the visual system and page hierarchy around the decisions users need to make.'],
  ['Build', 'We develop a fast, responsive experience and refine it across screens.'],
  ['Launch', 'We test, prepare the handoff, and support the first weeks after launch.'],
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#ded5cf] bg-[#f8f5f0]">
        <div className="absolute right-0 top-0 hidden h-full w-[36%] bg-[#efe8df] lg:block" aria-hidden="true" />
        <div className="site-container relative grid min-h-[690px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.65fr] lg:py-24">
          <div className="max-w-4xl">
            <h1 className="display-title max-w-[900px]">
              Digital work built for <span className="text-primary">clarity, trust, and growth.</span>
            </h1>
            <p className="body-large mt-8 max-w-2xl">
              Gooba Global LTD creates strategic websites and ready-to-use digital products for businesses that want a sharper, more credible presence online.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">Start a project <span>↗</span></Link>
              <Link href="/products" className="btn-secondary">Browse digital products</Link>
            </div>
          </div>

          <aside className="surface-card relative mx-auto w-full max-w-md p-7 lg:ml-auto lg:p-9">
            <span className="absolute -left-3 top-9 h-16 w-1 bg-highlight" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">What we deliver</p>
            <div className="mt-7 space-y-6">
              {[
                ['Custom websites', 'Strategy, design, development'],
                ['Digital products', 'Templates and interface kits'],
                ['Global collaboration', 'Managed from Sheridan, Wyoming'],
              ].map(([title, copy], index) => (
                <div key={title} className="grid grid-cols-[28px_1fr] gap-4 border-t border-[#e4dcd7] pt-5 first:border-0 first:pt-0">
                  <span className="text-2xl font-bold text-[#b78a43]">{index + 1}</span>
                  <div><h2 className="text-2xl">{title}</h2><p className="mt-1 text-sm leading-6 text-[#746966]">{copy}</p></div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#ded5cf] bg-[#efe8df] py-20 sm:py-28">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Digital shop</p>
              <h2 className="section-title">Ready-made, thoughtfully built.</h2>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#6f6461]"><StripeLogo className="h-7 w-auto rounded-sm" /> Secure checkout via Stripe</div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map(product => (
              <Link key={product.id} href={`/products/${product.id}`} className="group surface-card overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ddd4ce]">
                  <Image src={product.image} alt={product.title} fill className="object-contain p-3 transition duration-700 group-hover:scale-[1.02]" />
                  <span className="absolute left-4 top-4 bg-[#fffdf9] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">{product.category}</span>
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-2xl transition group-hover:text-primary">{product.title}</h3>
                    {product.creator && <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#746966]">Built by {product.creator}</p>}
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[#9b7d4e]">View details ↗</p>
                  </div>
                  <span className="whitespace-nowrap text-sm font-bold text-primary">{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-right"><Link href="/products" className="btn-secondary">View all products</Link></div>
        </div>
      </section>

      <section className="border-b border-[#ded5cf] bg-[#fffdf9] py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-[430px] lg:mx-0">
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-[#c7b7ae]" aria-hidden="true" />
            <div className="relative aspect-[589/703] overflow-hidden bg-[#9b9189]">
              <Image
                src="/ayayakoulti.png"
                alt="Aya Yakoulti, CEO of Gooba Global LTD"
                fill
                sizes="(max-width: 1024px) 90vw, 36vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-0 bg-primary px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              CEO · Gooba Global LTD
            </div>
          </div>

          <div>
            <p className="eyebrow">Founder-led vision</p>
            <h2 className="section-title max-w-3xl">Design, technology, and security under one direction.</h2>
            <p className="body-large mt-7 max-w-2xl">
              Aya Yakoulti leads Gooba Global LTD as a web developer, UI/UX designer, security professional, and full-stack website and web-app builder.
            </p>

            <blockquote className="relative mt-9 border-l-4 border-highlight bg-[#efe8df] px-7 py-8 sm:px-10 sm:py-10">
              <span className="absolute right-7 top-2 text-7xl font-bold leading-none text-primary/15" aria-hidden="true">“</span>
              <p className="relative max-w-3xl text-2xl font-bold leading-[1.2] tracking-[-0.035em] text-[#302727] sm:text-3xl">
                “The strongest digital products make complexity feel simple. Every interface should earn trust, every line of code should serve a purpose, and security should be part of the foundation—not an afterthought.”
              </p>
              <footer className="mt-6 border-t border-[#d5c8c0] pt-5">
                <p className="text-sm font-bold text-primary">Aya Yakoulti</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#796d69]">Chief Executive Officer</p>
              </footer>
            </blockquote>

            <Link href="/about" className="mt-8 inline-flex border-b border-primary pb-1 text-sm font-bold text-primary">Meet the CEO ↗</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#ded5cf] bg-[#fffdf9]">
        <div className="site-container grid divide-y divide-[#ded5cf] py-1 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ['Transparent pricing', 'Clear starting rates before you enquire'],
            ['Responsive by default', 'Designed and tested across modern screens'],
            ['Direct communication', 'A focused process without unnecessary layers'],
          ].map(([title, copy]) => (
            <div key={title} className="px-0 py-7 sm:px-7 first:sm:pl-0 last:sm:pr-0">
              <p className="text-sm font-bold text-[#302727]">{title}</p>
              <p className="mt-1.5 text-xs leading-5 text-[#7a6f6b]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="eyebrow">Website services</p>
              <h2 className="section-title">Two clear paths to launch.</h2>
              <p className="body-large mt-6">Choose a focused starting point. Scope can be refined after our first conversation.</p>
              <Link href="/listings" className="mt-8 inline-flex border-b border-primary pb-1 text-sm font-bold text-primary">Compare full scope ↗</Link>
            </div>
            <div className="border-t border-[#cfc4be]">
              {services.map((service) => (
                <article key={service.number} className="grid gap-5 border-b border-[#cfc4be] py-8 sm:grid-cols-[50px_1fr_auto] sm:items-start">
                  <span className="text-xs font-bold text-[#a08152]">{service.number}</span>
                  <div>
                    <h3 className="text-4xl">{service.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#746966]">{service.description}</p>
                    <ul className="mt-5 grid gap-2 text-xs font-semibold text-[#514846] sm:grid-cols-2">
                      {service.details.map(item => <li key={item} className="flex gap-2"><span className="text-primary">—</span>{item}</li>)}
                    </ul>
                  </div>
                  <p className="whitespace-nowrap text-sm font-bold text-primary">{service.price}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="eyebrow">Our process</p>
            <h2 className="section-title">Structured enough to move quickly.</h2>
            <p className="body-large mt-6">A practical process keeps decisions visible, feedback useful, and the project moving.</p>
          </div>
          <ol className="grid gap-px border border-[#ded5cf] bg-[#ded5cf] sm:grid-cols-2">
            {process.map(([title, copy], index) => (
              <li key={title} className="bg-[#fffdf9] p-7 sm:p-8">
                <span className="text-[11px] font-bold text-[#a08152]">0{index + 1}</span>
                <h3 className="mt-8 text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#746966]">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
