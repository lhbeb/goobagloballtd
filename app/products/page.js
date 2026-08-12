import Image from 'next/image';
import Link from 'next/link';
import StripeLogo from '../components/StripeLogo';

export const metadata = {
  title: 'Digital Products',
  description: 'Figma templates, a Node.js website template, and custom website services from GOOBA GLOBAL LTD.',
};

const products = [
  {
    id: 'logix',
    title: 'Logix — Logistics Website UI Kit',
    category: 'Figma UI Kit',
    price: 18,
    image: '/lisitings/Logix/photo1.png',
    description: 'Five-page Figma UI kit for logistics websites, with desktop and mobile layouts.',
    tags: ['Figma', 'Responsive', '12 screens'],
  },
  {
    id: 'ronel',
    title: 'Ronel — NodeJS Landing Page',
    category: 'Website Template',
    price: 18,
    image: '/lisitings/Ronel - NodeJs Landing Page Template/photo1.png',
    description: 'Node.js and Bootstrap 5.3 template with 10+ homepage layouts and authentication pages.',
    tags: ['NodeJS', 'Bootstrap', 'Responsive'],
  },
  {
    id: 'webconstruct',
    title: 'WebConstruct — Construction Figma Template',
    category: 'Figma Template',
    price: 199,
    fixedPrice: true,
    creator: 'GOOBA GLOBAL LTD',
    image: '/lisitings/WebConstruct/371b406ee08a100ebb1e790373df1135edadca3aaf14b0fe770d84626cd6c200.webp',
    description: 'One-page Figma template for construction, engineering, and architecture firms.',
    tags: ['Figma', '1280px Grid', 'One Page'],
  },
  {
    id: 'customwebsite',
    title: 'Custom Website Design & Development',
    category: 'Bespoke Service',
    price: 800,
    image: '/lisitings/Website Design and Development, Custom websites, Business websites, Custom Websites For Business/photo1-thumbnail.webp',
    description: 'Custom landing pages and multi-page business websites, built to your requirements.',
    tags: ['Custom', 'Strategy', 'Development'],
  },
];

export default function ProductsPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="site-container grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="eyebrow">Products</p>
            <h1 className="display-title">Templates and custom websites.</h1>
            <p className="body-large mt-7 max-w-2xl">Buy a Figma or Node.js template, or request a custom website.</p>
          </div>
          <div className="flex items-center border border-[#d4c7bf] bg-[#fffdf9] px-4 py-3" aria-label="Stripe">
            <StripeLogo className="h-7 w-auto rounded-sm" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="site-container">
          <div className="mb-10 flex flex-col justify-between gap-3 border-b border-[#cfc4be] pb-5 sm:flex-row sm:items-end">
            <p className="text-sm font-bold">Products and services</p>
            <p className="text-xs text-[#7a6f6b]">Open a listing for files, features, licenses, and pricing.</p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group surface-card overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e2d9d3]">
                  <Image src={product.image} alt={product.title} fill className="object-contain p-3 transition duration-700 group-hover:scale-[1.02]" />
                  <span className="absolute left-4 top-4 bg-highlight px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white">{product.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-3xl transition group-hover:text-primary">{product.title}</h2>
                    <span className="whitespace-nowrap text-sm font-bold text-primary">{product.fixedPrice ? '' : 'From '}${product.price}</span>
                  </div>
                  {product.creator && <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.13em] text-primary">Built by {product.creator}</p>}
                  <p className="mt-4 text-sm leading-7 text-[#746966]">{product.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-[#e5ddd8] pt-5">
                    {product.tags.map(tag => <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#897a74]">{tag}</span>)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
