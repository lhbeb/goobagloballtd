'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import CheckoutModal from '@/app/components/CheckoutModal';
import StripeLogo from '@/app/components/StripeLogo';

export default function ProductDetailPage({ params }) {
    const resolvedParams = use(params);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedLicense, setSelectedLicense] = useState('standard');
    const [showCheckout, setShowCheckout] = useState(false);

    const products = {
        logix: {
            id: 'logix',
            title: 'Logix – Logistic Website UI Figma Template',
            category: 'UI Kit',
            standardPrice: 18,
            extendedPrice: 89,
            description: `Logix is a five-page Figma UI kit for logistics websites. It includes Homepage, About, Services, Service Details, and Contact layouts in desktop and mobile sizes.`,
            note: 'All preview images are excluded from the download Figma files.',
            images: [
                '/lisitings/Logix/photo1.png',
                '/lisitings/Logix/photo2.jpg',
                '/lisitings/Logix/photo3.jpg',
                '/lisitings/Logix/photo4.jpg',
                '/lisitings/Logix/photo5.jpg',
                '/lisitings/Logix/photo6.jpg',
                '/lisitings/Logix/photo7.jpg',
                '/lisitings/Logix/photo8.jpg'
            ],
            pages: ['Homepage', 'About', 'Services', 'Service Details', 'Contact'],
            features: [
                'Desktop & Mobile View',
                'Support for Figma',
                '1440 px (desktop) & 390 px (mobile)',
                'Uses Google Fonts',
                'Editable Figma components',
                'Resizable graphics'
            ],
            colors: ['Blue', 'Red', 'White'],
            perfectFor: ['Digital Marketing Agency', 'Marketing Company', 'Logistics Companies'],
            specs: {
                created: 'August 4, 2025',
                compatible: 'Figma',
                fileSize: '12.41 MB',
                fileType: 'FIG',
                dimensions: '1440 px (desktop) & 390 px (mobile)'
            }
        },
        ronel: {
            id: 'ronel',
            title: 'Ronel - NodeJs Landing Page Template',
            category: 'Landing Page',
            standardPrice: 18,
            extendedPrice: 89,
            description: `Ronel is a Node.js and Bootstrap 5.3 template with 10+ homepage variations and three authentication pages. It includes login and signup layouts.`,
            images: [
                '/lisitings/Ronel - NodeJs Landing Page Template/photo1.png'
            ],
            pages: ['10+ Home Pages', 'Log In', 'Sign Up', 'Auth Pages'],
            features: [
                'Built with NodeJs & Bootstrap v5.3',
                '10+ Different pages',
                'Auth Pages included',
                'Responsive layouts',
                'Editable source files',
                'Log In & Sign Up Pages included'
            ],
            colors: ['Various Options'],
            perfectFor: ['Startups', 'SaaS', 'Agencies', 'Businesses'],
            specs: {
                created: 'Not listed',
                compatible: 'NodeJs, Bootstrap v5',
                fileSize: 'Not listed',
                fileType: 'ZIP',
                dimensions: 'Fully Responsive'
            }
        },
        webconstruct: {
            id: 'webconstruct',
            title: 'WebConstruct – Construction & Architecture Figma Template',
            category: 'Figma Template',
            standardPrice: 199,
            extendedPrice: 199,
            singlePrice: true,
            licenseName: 'Commercial License',
            licenseDescription: 'Use the template for one business or client website project.',
            creator: 'GOOBA GLOBAL LTD',
            aboutTitle: 'About WebConstruct',
            description: `WebConstruct is a one-page Figma template for construction, engineering, and architecture firms. It includes sections for company information, services, projects, portfolios, and team profiles on a 1280 px Bootstrap grid.`,
            images: [
                '/lisitings/WebConstruct/371b406ee08a100ebb1e790373df1135edadca3aaf14b0fe770d84626cd6c200.webp',
                '/lisitings/WebConstruct/f2dba0bc07df45baa428554ee3ea5d4fedd1648976554e6f9b417948204438cf.webp'
            ],
            pages: ['One Home Page'],
            features: [
                'Bootstrap Grid 1280px',
                'Editable Figma file',
                'Organized layers',
                'One-page layout'
            ],
            credits: ['Freepik', 'Font Awesome', 'Google Fonts'],
            colors: ['Yellow', 'Black', 'White'],
            perfectFor: ['Construction Firms', 'Engineering Companies', 'Architectural Studios', 'Contractors'],
            specs: {
                created: 'Not listed',
                compatible: 'Figma',
                fileSize: 'Digital Download',
                fileType: 'FIG',
                dimensions: 'Bootstrap Grid 1280px'
            }
        },
        customwebsite: {
            id: 'customwebsite',
            title: 'Custom Website Design & Development',
            category: 'Web Design',
            standardPrice: 800,
            extendedPrice: 1500,
            licenseName: 'Launch scope',
            licenseDescription: 'A landing page or small business website. Final scope is confirmed in writing.',
            extendedLicenseName: 'Expanded scope',
            extendedLicenseDescription: 'A larger custom website project. Final scope is confirmed in writing.',
            description: `Custom design and development for a landing page or multi-page business website. Scope, schedule, deliverables, and final price are confirmed before work begins.`,
            note: 'Hosting and source-file delivery are confirmed in the project scope.',
            images: [
                '/lisitings/Website Design and Development, Custom websites, Business websites, Custom Websites For Business/photo1-thumbnail.webp',
                '/lisitings/Website Design and Development, Custom websites, Business websites, Custom Websites For Business/il_1140xN.6495666284_b92l.webp',
                '/lisitings/Website Design and Development, Custom websites, Business websites, Custom Websites For Business/il_1140xN.6592182288_p9qm.webp',
                '/lisitings/Website Design and Development, Custom websites, Business websites, Custom Websites For Business/il_1140xN.6592182412_7z98.webp',
                '/lisitings/Website Design and Development, Custom websites, Business websites, Custom Websites For Business/il_1140xN.6592182722_blvw.webp',
                '/lisitings/Website Design and Development, Custom websites, Business websites, Custom Websites For Business/il_1140xN.6640297267_d3o2.webp',
                '/lisitings/Website Design and Development, Custom websites, Business websites, Custom Websites For Business/il_1140xN.6640297547_d9zd.webp',
                '/lisitings/Website Design and Development, Custom websites, Business websites, Custom Websites For Business/il_1140xN.6640297709_531z.webp'
            ],
            pages: ['Homepage', 'About', 'Services', 'Portfolio', 'Contact'],
            features: [
                'Fully custom design (no templates)',
                'Desktop & Mobile responsive',
                'SEO-ready structure',
                'Performance testing',
                'Contact form included',
                'Google Analytics setup',
                'Browser testing',
                'Post-launch support'
            ],
            colors: ['Your Brand Colors'],
            perfectFor: ['Small Businesses', 'Freelancers & Consultants', 'Startups', 'Service Providers'],
            specs: {
                created: 'February 25, 2026',
                compatible: 'Confirmed in project scope',
                fileSize: 'Live Website',
                fileType: 'Custom Build',
                dimensions: 'Fully Responsive'
            }
        }
    };

    const product = products[resolvedParams.id];

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                    <Link href="/products" className="text-primary hover:underline">Back to Products</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-light">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-primary">Products</Link>
                        <span>/</span>
                        <span className="text-gray-900">{product.category}</span>
                    </div>
                </div>
            </div>

            {/* Product Section */}
            <section className="py-4">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left: Image Gallery + Product Specs */}
                        <div>
                            {/* Image Gallery */}
                            <div className="bg-white rounded-xl overflow-hidden mb-4">
                                <div className="relative aspect-video bg-slate-100">
                                    <Image
                                        src={product.images[selectedImage]}
                                        alt={product.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-7 gap-2 mb-4">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative aspect-video rounded-lg overflow-hidden border-2 transition ${selectedImage === index ? 'border-primary' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <Image src={image} alt={`Preview ${index + 1}`} fill className="object-cover" />
                                    </button>
                                ))}
                            </div>

                            {/* Product Specs - Now below gallery */}
                            <div className="bg-white rounded-xl p-6">
                                <h3 className="font-bold mb-4">File details</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between py-2 border-b">
                                        <span className="text-gray-600">Created:</span>
                                        <span className="font-medium">{product.specs.created}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b">
                                        <span className="text-gray-600">Compatible with:</span>
                                        <span className="font-medium">{product.specs.compatible}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b">
                                        <span className="text-gray-600">File size:</span>
                                        <span className="font-medium">{product.specs.fileSize}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b">
                                        <span className="text-gray-600">File type:</span>
                                        <span className="font-medium">{product.specs.fileType}</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="text-gray-600">Dimensions:</span>
                                        <span className="font-medium text-right">{product.specs.dimensions}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Product Info + License Selection */}
                        <div>
                            <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                                {product.category}
                            </span>
                            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                            {product.creator && (
                                <p className="-mt-2 mb-5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                                    Built by {product.creator}
                                </p>
                            )}

                            {/* License Selection Card */}
                            <div className="bg-white rounded-xl p-6 mb-4">
                                <h3 className="font-bold mb-4">{product.singlePrice ? 'Product License' : 'Select License'}</h3>
                                <div className="space-y-3 mb-6">
                                    <label className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition ${selectedLicense === 'standard' ? 'border-primary bg-secondary' : 'border-gray-200'
                                        }`}>
                                        <input
                                            type="radio"
                                            name="license"
                                            value="standard"
                                            checked={selectedLicense === 'standard'}
                                            onChange={(e) => setSelectedLicense(e.target.value)}
                                            className="mt-1 mr-3"
                                        />
                                        <div className="flex-1">
                                            <div className="font-semibold">{product.licenseName || 'Standard License'} - ${product.standardPrice}</div>
                                            <p className="text-sm text-gray-600">{product.licenseDescription || 'Use in one project for yourself or one client. End users cannot be charged to access the final product.'}</p>
                                        </div>
                                    </label>
                                    {!product.singlePrice && (
                                        <label className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition ${selectedLicense === 'extended' ? 'border-primary bg-secondary' : 'border-gray-200'
                                            }`}>
                                            <input
                                                type="radio"
                                                name="license"
                                                value="extended"
                                                checked={selectedLicense === 'extended'}
                                                onChange={(e) => setSelectedLicense(e.target.value)}
                                                className="mt-1 mr-3"
                                            />
                                            <div className="flex-1">
                                                <div className="font-semibold">{product.extendedLicenseName || 'Extended License'} - ${product.extendedPrice}</div>
                                                <p className="text-sm text-gray-600">{product.extendedLicenseDescription || 'Use in one project for yourself or one client. End users may be charged to access the final product.'}</p>
                                            </div>
                                        </label>
                                    )}
                                </div>
                                <button
                                    onClick={() => setShowCheckout(true)}
                                    className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary-dark transition hover:shadow-xl hover:scale-[1.02] active:scale-100"
                                >
                                    Continue to checkout — ${selectedLicense === 'standard' ? product.standardPrice : product.extendedPrice}
                                </button>
                                <div className="mt-3 flex items-center justify-center" aria-label="Stripe">
                                    <StripeLogo className="h-7 w-auto rounded border border-gray-100" />
                                </div>
                            </div>

                            {/* Product Description */}
                            <div className="bg-white rounded-xl p-6">
                                <h3 className="font-bold mb-4">{product.aboutTitle || 'Product details'}</h3>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{product.description}</p>
                                {product.note && (
                                    <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-3 rounded">
                                        <p className="text-amber-900"><strong>*Note*</strong><br />{product.note}</p>
                                    </div>
                                )}
                                {product.credits && (
                                    <div className="mt-6 border-t border-gray-200 pt-5">
                                        <h4 className="mb-3 text-sm font-bold">Credits</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.credits.map((credit) => (
                                                <span key={credit} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                                                    {credit}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Product Details Grid */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Pages */}
                        <div className="bg-white rounded-xl p-4">
                            <h3 className="font-bold mb-4">Pages</h3>
                            <ul className="space-y-2">
                                {product.pages.map((page, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {page}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Features */}
                        <div className="bg-white rounded-xl p-4">
                            <h3 className="font-bold mb-4">Features</h3>
                            <ul className="space-y-2">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                                        <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Colors */}
                        <div className="bg-white rounded-xl p-4">
                            <h3 className="font-bold mb-4">Colors</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.colors.map((color, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-secondary text-primary rounded-full font-semibold">
                                        {color}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Perfect For */}
                        <div className="bg-white rounded-xl p-4">
                            <h3 className="font-bold mb-4">Designed for</h3>
                            <ul className="space-y-2">
                                {product.perfectFor.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Checkout Modal */}
            {showCheckout && (
                <CheckoutModal
                    product={product}
                    license={selectedLicense}
                    price={selectedLicense === 'standard' ? product.standardPrice : product.extendedPrice}
                    onClose={() => setShowCheckout(false)}
                />
            )}
        </div>
    );
}
