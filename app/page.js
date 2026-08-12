import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Launch Website',
    price: 'From $650',
    description: 'A responsive website with up to five pages for a new or small business.',
    details: ['Up to 5 pages', 'Responsive development', 'Page titles and metadata', '30 days launch support'],
  },
  {
    number: '02',
    title: 'Growth Website',
    price: 'From $1,250',
    description: 'A website with up to ten pages, with CMS or ecommerce options.',
    details: ['Up to 10 pages', 'CMS or ecommerce options', 'Motion and interactions', '60 days launch support'],
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
    title: 'Custom Website Design & Development',
    category: 'Website Service',
    price: 'From $800',
    image: '/lisitings/Website Design and Development, Custom websites, Business websites, Custom Websites For Business/photo1-thumbnail.webp',
  },
];

const process = [
  ['Scope', 'Define the pages, features, audience, content, and timeline.'],
  ['Design', 'Create the page layouts and visual system.'],
  ['Build', 'Develop the website and test it across screen sizes.'],
  ['Launch', 'Review, publish, and hand over the website.'],
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#ded5cf] bg-[#f8f5f0]">
        <div className="absolute right-0 top-0 hidden h-full w-[36%] bg-[#efe8df] lg:block" aria-hidden="true" />
        <div className="site-container relative grid min-h-[690px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.65fr] lg:py-24">
          <div className="max-w-4xl">
            <h1 className="display-title max-w-[900px]">
              Digital products and <span className="text-primary">custom websites.</span>
            </h1>
            <p className="body-large mt-8 max-w-2xl">
              Buy website templates and UI kits, or hire Gooba Global LTD to design and build a custom website.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">Request a website <span>↗</span></Link>
              <Link href="/products" className="btn-secondary">Browse digital products</Link>
            </div>
          </div>

          <Link
            href="/products/webconstruct"
            className="group surface-card relative mx-auto w-full max-w-md overflow-hidden lg:ml-auto"
            aria-label="View the featured WebConstruct Figma template"
          >
            <span className="absolute -left-px top-8 z-10 h-20 w-1 bg-highlight" aria-hidden="true" />
            <div className="relative aspect-[16/10] overflow-hidden bg-[#ddd4ce]">
              <Image
                src="/lisitings/WebConstruct/371b406ee08a100ebb1e790373df1135edadca3aaf14b0fe770d84626cd6c200.webp"
                alt="WebConstruct construction and architecture Figma template"
                fill
                sizes="(max-width: 1024px) 90vw, 34vw"
                className="object-contain p-3 transition duration-700 group-hover:scale-[1.025]"
              />
              <span className="absolute left-5 top-5 bg-[#fffdf9] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">Featured listing</span>
            </div>
            <div className="p-7 lg:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#9b7d4e]">Figma template</p>
                <p className="text-lg font-bold text-primary">$199</p>
              </div>
              <h2 className="mt-4 text-4xl transition group-hover:text-primary">WebConstruct</h2>
              <p className="mt-3 text-sm leading-7 text-[#746966]">A one-page Figma template for construction, engineering, and architecture firms.</p>
              <div className="mt-6 flex items-center justify-between border-t border-[#e4dcd7] pt-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#746966]">Built by GOOBA GLOBAL LTD</span>
                <span className="text-xl text-primary transition group-hover:translate-x-1">↗</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-y border-[#ded5cf] bg-[#efe8df] py-20 sm:py-28">
        <div className="site-container">
          <div>
            <p className="eyebrow">Products &amp; services</p>
            <h2 className="section-title">Templates and custom website work.</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {products.map(product => (
              <Link key={product.id} href={`/products/${product.id}`} className="group surface-card flex flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#ddd4ce]">
                  <Image src={product.image} alt={product.title} fill className="object-contain p-4 transition duration-700 group-hover:scale-[1.02]" />
                  <span className="absolute left-5 top-5 bg-[#fffdf9] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">{product.category}</span>
                </div>
                <div className="flex flex-1 items-start justify-between gap-6 p-7 sm:p-8">
                  <div>
                    <h3 className="text-3xl transition group-hover:text-primary sm:text-4xl">{product.title}</h3>
                    {product.creator && <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#746966]">Built by {product.creator}</p>}
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#9b7d4e]">View details ↗</p>
                  </div>
                  <span className="whitespace-nowrap text-base font-bold text-primary">{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#ded5cf] bg-[#fffdf9] py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-[430px] lg:mx-0">
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-[#c7b7ae]" aria-hidden="true" />
            <div className="relative aspect-[589/703] overflow-hidden bg-[#9b9189]">
              <Image
                src="/ayayakoulti.png"
                alt="Aya Yakoulti, CEO of RIFTEDCARS LLC"
                fill
                sizes="(max-width: 1024px) 90vw, 36vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-0 bg-primary px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              CEO · RIFTEDCARS LLC
            </div>
          </div>

          <div>
            <p className="eyebrow">Leadership</p>
            <h2 className="section-title max-w-3xl">Aya Yakoulti, CEO of RIFTEDCARS LLC.</h2>
            <p className="body-large mt-7 max-w-2xl">
              RIFTEDCARS LLC operates Gooba Global LTD. Aya&apos;s work includes web development, UI/UX design, full-stack web apps, and website security.
            </p>

            <div className="relative mt-9 border-l-4 border-highlight bg-[#efe8df] px-7 py-8 sm:px-10 sm:py-10">
              <p className="relative max-w-3xl text-2xl font-bold leading-[1.2] tracking-[-0.035em] text-[#302727] sm:text-3xl">
                Aya&apos;s approach: build clear interfaces, reliable code, and security into every website from the start.
              </p>
              <div className="mt-6 border-t border-[#d5c8c0] pt-5">
                <p className="text-sm font-bold text-primary">Aya Yakoulti</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#796d69]">CEO, RIFTEDCARS LLC</p>
                <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
                  <a href="mailto:aya.yakoulti1999@gmail.com" className="break-all font-semibold text-[#4f4441] transition hover:text-primary">aya.yakoulti1999@gmail.com</a>
                  <a href="tel:+12512834593" className="font-semibold text-[#4f4441] transition hover:text-primary">1-2512834593</a>
                </div>
              </div>
            </div>

            <Link href="/about" className="mt-8 inline-flex border-b border-primary pb-1 text-sm font-bold text-primary">About Aya Yakoulti ↗</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#ded5cf] bg-[#fffdf9]">
        <div className="site-container grid divide-y divide-[#ded5cf] py-1 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ['Starting prices', 'Starting prices are shown for each website package.'],
            ['Responsive websites', 'Built and tested for phones, tablets, and desktop screens.'],
            ['Direct contact', 'Work directly with Gooba Global LTD.'],
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
              <h2 className="section-title">Custom website packages.</h2>
              <p className="body-large mt-6">Choose a package based on the number of pages and features you need.</p>
              <Link href="/listings" className="mt-8 inline-flex border-b border-primary pb-1 text-sm font-bold text-primary">View website services ↗</Link>
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
            <h2 className="section-title">How website projects work.</h2>
            <p className="body-large mt-6">Four steps from scope to launch.</p>
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
