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
    description: 'Product details, included files, license options, and pricing from GOOBA GLOBAL LTD.',
  };
}

export default function ProductLayout({ children }) {
  return children;
}
