const titles = {
  logix: 'Logix Logistics UI Kit',
  ronel: 'Ronel NodeJS Landing Page',
  webconstruct: 'WebConstruct Construction Figma Template',
  customwebsite: 'Custom Website Design & Development',
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: titles[id] || 'Product Details',
    description: 'View product details, licensing, pricing, and secure checkout information from Gooba Global LTD.',
  };
}

export default function ProductLayout({ children }) {
  return children;
}
