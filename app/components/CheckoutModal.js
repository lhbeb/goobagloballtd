'use client';

import StripeLogo from './StripeLogo';

export default function CheckoutModal({ product, license, price, onClose }) {
    const subject = encodeURIComponent(`Purchase enquiry: ${product.title}`);
    const body = encodeURIComponent(
        `I would like to purchase ${product.title}.\nLicense: ${license}\nListed price: $${price} USD`
    );

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
            onClick={(event) => event.target === event.currentTarget && onClose()}
        >
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-gray-100 transition hover:bg-gray-200"
                    aria-label="Close purchase information"
                >
                    <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="border-b border-[#e6ddd8] bg-[#f8f5f0] p-7 sm:p-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">Purchase information</p>
                    <h2 className="mt-3 pr-10 text-3xl">Online checkout is not active yet.</h2>
                    <p className="mt-3 text-sm leading-6 text-[#6f6461]">Contact us to purchase this item. Do not enter or send card details by email.</p>
                </div>

                <div className="p-7 sm:p-8">
                    <div className="border border-[#ded5cf] bg-[#fffdf9] p-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8b7b75]">Order summary</p>
                        <div className="mt-4 flex items-start justify-between gap-5">
                            <div>
                                <p className="font-bold text-[#302727]">{product.title}</p>
                                <p className="mt-1 text-xs capitalize text-[#746966]">{license} license</p>
                            </div>
                            <p className="whitespace-nowrap text-xl font-bold text-primary">${price} USD</p>
                        </div>
                    </div>

                    <div className="mt-5 flex items-center gap-3 rounded-md border border-[#ded5cf] bg-[#efe8df] px-4 py-3">
                        <StripeLogo className="h-7 w-auto rounded-sm" />
                        <p className="text-xs leading-5 text-[#665b58]">Stripe integration is pending. No payment will be taken on this website yet.</p>
                    </div>

                    <a
                        href={`mailto:aya.yakoulti1999@gmail.com?subject=${subject}&body=${body}`}
                        className="btn-primary mt-6 w-full"
                    >
                        Email to purchase <span>↗</span>
                    </a>
                    <button type="button" onClick={onClose} className="btn-secondary mt-3 w-full">Return to product</button>
                </div>
            </div>
        </div>
    );
}
