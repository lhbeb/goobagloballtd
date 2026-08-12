import Link from 'next/link';

export const metadata = {
  title: 'Website Services',
  description: 'Website design and development packages from GOOBA GLOBAL LTD.',
};

const services = [
  {
    title: 'Launch Website',
    price: '$650',
    timing: '2–3 weeks',
    description: 'A responsive website with up to five pages.',
    features: ['Up to 5 pages', 'Custom responsive design', 'Page titles and metadata', 'Contact form setup', 'Two revision rounds', '30 days of launch support'],
  },
  {
    title: 'Growth Website',
    price: '$1,250',
    timing: '4–6 weeks',
    description: 'A website with up to ten pages, with CMS, ecommerce, or booking options.',
    features: ['Up to 10 pages', 'Content management system', 'Ecommerce or booking options', 'Motion and interactions', 'Performance testing', '60 days of launch support'],
  },
];

export default function ListingsPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="site-container max-w-4xl">
          <p className="eyebrow">Website services</p>
          <h1 className="display-title">Website packages and starting prices.</h1>
          <p className="body-large mt-7 max-w-2xl">Choose a package based on the number of pages and features you need. Final scope and price are confirmed before work starts.</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="site-container">
          <div className="grid gap-7 lg:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.title} className="surface-card flex flex-col p-7 sm:p-9">
                <div className="flex items-center justify-between border-b border-[#ded5cf] pb-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#a08152]">Package 0{index + 1}</span>
                  <span className="text-xs font-bold text-[#6e625f]">{service.timing}</span>
                </div>
                <div className="py-8">
                  <h2 className="text-5xl">{service.title}</h2>
                  <p className="mt-3 text-2xl font-bold text-primary">{service.price} <span className="text-xs font-medium uppercase tracking-wider text-[#8c7e78]">starting rate</span></p>
                  <p className="mt-6 text-sm leading-7 text-[#746966]">{service.description}</p>
                </div>
                <ul className="grid gap-3 border-t border-[#ded5cf] py-7 text-sm text-[#4f4543] sm:grid-cols-2">
                  {service.features.map(feature => <li key={feature} className="flex gap-2"><span className="text-primary">✓</span>{feature}</li>)}
                </ul>
                <Link href="/contact" className="btn-primary mt-auto w-full">Request this package <span>↗</span></Link>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 border border-[#d7cdc7] bg-[#efe8df] p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-9">
            <div><h2 className="text-3xl">Need a different scope?</h2><p className="mt-2 text-sm leading-6 text-[#746966]">Send us the pages and features you need. We will provide a custom price.</p></div>
            <Link href="/contact" className="btn-secondary">Contact us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
