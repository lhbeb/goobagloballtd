'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import StripeLogo from './StripeLogo';

export default function CheckoutModal({ product, license, price, onClose }) {
    const [previewComplete, setPreviewComplete] = useState(false);
    const formId = useId();
    const titleId = `${formId}-title`;
    const descriptionId = `${formId}-description`;
    const dialogRef = useRef(null);
    const emailRef = useRef(null);
    const isService = product.id === 'customwebsite';
    const licenseLabel = license === 'extended'
        ? product.extendedLicenseName || 'Extended License'
        : product.licenseName || 'Standard License';
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(price);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        const previousFocus = document.activeElement;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
                return;
            }

            if (event.key !== 'Tab' || !dialogRef.current) return;

            const focusableElements = dialogRef.current.querySelectorAll(
                'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement?.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement?.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        const focusFrame = window.requestAnimationFrame(() => emailRef.current?.focus());
        return () => {
            window.cancelAnimationFrame(focusFrame);
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
            if (previousFocus instanceof HTMLElement) previousFocus.focus();
        };
    }, [onClose]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setPreviewComplete(true);
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171111]/75 p-0 backdrop-blur-sm sm:p-4"
            onClick={(event) => event.target === event.currentTarget && onClose()}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                ref={dialogRef}
                className="relative max-h-[100dvh] min-h-full w-full overflow-y-auto bg-[#fffdf9] shadow-[0_30px_90px_rgba(23,17,17,0.38)] sm:max-h-[calc(100dvh-2rem)] sm:min-h-0 sm:max-w-6xl sm:rounded-xl"
            >
                <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[#ded5cf] bg-[#fffdf9]/95 px-5 py-4 backdrop-blur-md sm:px-8">
                    <div className="flex min-w-0 items-center gap-3 sm:gap-5">
                        <p className="truncate text-sm font-bold tracking-[-0.02em] text-[#302727]">GOOBA GLOBAL LTD</p>
                        <span className="hidden h-4 w-px bg-[#d8cbc4] sm:block" aria-hidden="true" />
                        <p className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-[#81736e] sm:block">Checkout preview</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d8cec8] text-[#5e514d] transition hover:border-primary hover:bg-[#f4ece7] hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        aria-label="Close checkout"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>

                <div className="grid lg:grid-cols-[1.15fr_.85fr]">
                    <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
                        <div className="mb-9 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8a7c76]">
                            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-white">1</span>
                            <span className="text-primary">Your details</span>
                            <span className="h-px flex-1 bg-[#d8cec8]" aria-hidden="true" />
                            <span className="grid h-7 w-7 place-items-center rounded-full border border-[#bfaea6] bg-[#fffdf9] text-[#675a56]">2</span>
                            <span>Payment</span>
                        </div>

                        <form id={formId} onSubmit={handleSubmit} autoComplete="off">
                            <section aria-labelledby={`${formId}-details-heading`}>
                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">Customer</p>
                                <h2 id={titleId} className="mt-3 text-3xl leading-none sm:text-4xl">Complete your order</h2>
                                <p id={descriptionId} className="mt-3 max-w-xl text-sm leading-6 text-[#746965]">Enter the contact details that would be used for this order. Nothing entered here is submitted or stored by this checkout.</p>

                                <h3 id={`${formId}-details-heading`} className="sr-only">Your details</h3>
                                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                                    <label className="block sm:col-span-2">
                                        <span className="mb-2 block text-xs font-bold text-[#4d4240]">Email address</span>
                                        <input ref={emailRef} className="field" type="email" name="email" inputMode="email" placeholder="you@example.com" required />
                                    </label>
                                    <label className="block">
                                        <span className="mb-2 block text-xs font-bold text-[#4d4240]">First name</span>
                                        <input className="field" type="text" name="firstName" placeholder="First name" required />
                                    </label>
                                    <label className="block">
                                        <span className="mb-2 block text-xs font-bold text-[#4d4240]">Last name</span>
                                        <input className="field" type="text" name="lastName" placeholder="Last name" required />
                                    </label>
                                    <label className="block sm:col-span-2">
                                        <span className="mb-2 block text-xs font-bold text-[#4d4240]">Country or region</span>
                                        <select className="field" name="country" defaultValue="US">
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="MA">Morocco</option>
                                            <option value="OTHER">Other</option>
                                        </select>
                                    </label>
                                </div>
                            </section>

                            <section className="mt-10 border-t border-[#ded5cf] pt-9" aria-labelledby={`${formId}-payment-heading`}>
                                <div className="flex items-start justify-between gap-5">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">Payment method</p>
                                        <h3 id={`${formId}-payment-heading`} className="mt-3 text-2xl">Card payment</h3>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-sm border border-[#d8cec8] bg-white px-3 py-2">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#746864]">Checkout powered by</span>
                                        <StripeLogo className="h-7 w-auto rounded-sm" />
                                    </div>
                                </div>

                                <div className="mt-6 overflow-hidden rounded-md border-2 border-primary bg-white shadow-[0_12px_30px_rgba(104,37,37,0.08)]" aria-label="Card details preview. Card information cannot be entered.">
                                    <div className="flex items-center justify-between border-b border-[#ded5cf] px-4 py-3.5">
                                        <span className="text-xs font-bold text-[#514542]">Card number</span>
                                        <div className="flex gap-1.5 text-[9px] font-bold tracking-tight text-[#675c59]" aria-hidden="true">
                                            <span className="rounded border border-[#d7cbc5] px-1.5 py-1">VISA</span>
                                            <span className="rounded border border-[#d7cbc5] px-1.5 py-1">MC</span>
                                            <span className="rounded border border-[#d7cbc5] px-1.5 py-1">AMEX</span>
                                        </div>
                                    </div>
                                    <div className="px-4 py-4 text-base tracking-[0.16em] text-[#9b8e89]" aria-hidden="true">•••• •••• •••• ••••</div>
                                    <div className="grid grid-cols-2 border-t border-[#ded5cf]">
                                        <div className="border-r border-[#ded5cf] px-4 py-3.5">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8a7c76]">Expiry</p>
                                            <p className="mt-1 text-sm text-[#a0928c]">MM / YY</p>
                                        </div>
                                        <div className="px-4 py-3.5">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8a7c76]">Security code</p>
                                            <p className="mt-1 text-sm text-[#a0928c]">CVC</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </form>
                    </div>

                    <aside className="border-t border-[#ded5cf] bg-[#efe8df] px-5 py-8 sm:px-8 sm:py-10 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
                        <div className="lg:sticky lg:top-24">
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">Order summary</p>

                            <div className="mt-6 flex gap-4 border-b border-[#d1c4bd] pb-6">
                                <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-sm border border-[#d4c7bf] bg-[#fffdf9]">
                                    {product.images?.[0] && (
                                        <Image
                                            src={product.images[0]}
                                            alt=""
                                            fill
                                            sizes="112px"
                                            className="object-contain p-2"
                                        />
                                    )}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-base font-bold leading-5 text-[#302727]">{product.title}</p>
                                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#81736e]">{licenseLabel}</p>
                                    <p className="mt-3 text-sm font-bold text-primary">{formattedPrice}</p>
                                </div>
                            </div>

                            <dl className="space-y-4 border-b border-[#d1c4bd] py-6 text-sm">
                                <div className="flex items-center justify-between gap-4">
                                    <dt className="text-[#6f6461]">Subtotal</dt>
                                    <dd className="font-bold text-[#302727]">{formattedPrice}</dd>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <dt className="text-[#6f6461]">{isService ? 'Project delivery' : 'Digital delivery'}</dt>
                                    <dd className="font-bold text-[#302727]">Included</dd>
                                </div>
                            </dl>

                            <div className="flex items-end justify-between gap-4 py-6">
                                <div>
                                    <p className="text-sm font-bold text-[#302727]">Total</p>
                                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#81736e]">USD</p>
                                </div>
                                <p className="text-3xl font-bold tracking-[-0.04em] text-primary">{formattedPrice}</p>
                            </div>

                            <button type="submit" form={formId} className="btn-primary w-full py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                                Place order · {formattedPrice}
                            </button>

                            <button type="button" onClick={onClose} className="btn-secondary mt-3 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Return to product</button>

                            <p className="mt-3 text-center text-[11px] leading-5 text-[#746864]">Checkout preview only. This button does not place an order or submit checkout details.</p>

                            {previewComplete && (
                                <div className="mt-5 border border-[#bfaea6] bg-[#fffdf9] p-4 text-sm leading-6 text-[#4f4441]" role="status" aria-live="polite">
                                    <p className="font-bold text-primary">Order preview complete</p>
                                    <p className="mt-1">No order was placed, no payment was charged, and no checkout information was submitted.</p>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
