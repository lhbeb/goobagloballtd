export const metadata = {
    title: 'Terms of Service',
    description: 'Terms for digital products and custom website services from GOOBA GLOBAL LTD.',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen">
            <section className="page-hero">
                <div className="site-container max-w-3xl">
                    <p className="eyebrow">Legal</p>
                    <h1 className="display-title">Terms of Service</h1>
                    <p className="mt-6 text-sm text-[#746966]">Last updated: August 2026</p>
                </div>
            </section>

            <section className="py-16 sm:py-20">
                <div className="site-container">
                    <article className="surface-card mx-auto max-w-4xl p-7 text-gray-700 sm:p-12">
                        <p className="text-xl leading-8">These terms apply when you buy a digital product or order a custom service from the GOOBA GLOBAL LTD store, operated by RIFTEDCARS LLC.</p>

                        <h2 className="mt-12 text-3xl">1. Products and services</h2>
                        <p className="mt-4 leading-7">GOOBA GLOBAL LTD sells downloadable templates and provides website design, web development, web-app, and UI/UX services.</p>
                        <p className="mt-4 leading-7">The deliverables, timeline, revisions, price, and support period for custom work will be stated in a written project proposal. Changes to the agreed scope may change the price or timeline.</p>

                        <h2 className="mt-12 text-3xl">2. Prices and payment</h2>
                        <p className="mt-4 leading-7">Prices are shown on the relevant listing or in a written project proposal. Service payment schedules and any required deposit will be stated in that proposal. Work may be paused if an agreed payment is overdue.</p>
                        <p className="mt-4 leading-7">Online checkout is not active. When Stripe checkout is enabled, Stripe&apos;s terms will also apply to the payment transaction.</p>

                        <h2 className="mt-12 text-3xl">3. Digital-product licenses</h2>
                        <p className="mt-4 leading-7">A downloadable product may be used only under the license shown at purchase. You may not resell, redistribute, share, or repackage the product as a standalone item unless the license expressly allows it. Third-party assets remain subject to their own licenses.</p>

                        <h2 className="mt-12 text-3xl">4. Client responsibilities</h2>
                        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
                            <li>Provide required content, access, and feedback on time</li>
                            <li>Use only content and assets you own or are licensed to use</li>
                            <li>Review deliverables and report issues within the agreed review period</li>
                            <li>Pay invoices according to the project proposal</li>
                        </ul>

                        <h2 className="mt-12 text-3xl">5. Ownership</h2>
                        <p className="mt-4 leading-7">Rights to custom work transfer only after full payment and as described in the project agreement. Pre-existing tools, reusable components, templates, and third-party assets are excluded unless the agreement says otherwise.</p>

                        <h2 className="mt-12 text-3xl">6. Support</h2>
                        <p className="mt-4 leading-7">Any included support period and what it covers will be stated in the product listing or project proposal. Ongoing maintenance and new features require a separate agreement.</p>

                        <h2 className="mt-12 text-3xl">7. Cancellations and refunds</h2>
                        <p className="mt-4 leading-7">Digital-product sales are final after delivery except where required by law or where the product is materially defective. Service cancellations and payment for completed work are governed by the project proposal.</p>

                        <h2 className="mt-12 text-3xl">8. Results and liability</h2>
                        <p className="mt-4 leading-7">We do not guarantee search rankings, revenue, traffic, or other business results. To the extent permitted by law, GOOBA GLOBAL LTD&apos;s total liability is limited to the amount paid for the affected product or service. We are not liable for indirect or consequential loss.</p>

                        <h2 className="mt-12 text-3xl">9. Governing law and updates</h2>
                        <p className="mt-4 leading-7">These terms are governed by Wyoming law. Updated terms apply to future purchases and orders. An active service agreement changes only when both parties agree in writing.</p>

                        <h2 className="mt-12 text-3xl">10. Contact</h2>
                        <div className="mt-6 bg-secondary p-6">
                            <p className="mb-2 font-bold text-gray-800">GOOBA GLOBAL LTD</p>
                            <p className="mb-2">Store operator: RIFTEDCARS LLC</p>
                            <p className="mb-2">CEO of RIFTEDCARS LLC: Aya Yakoulti</p>
                            <p className="mb-2">Email: aya.yakoulti1999@gmail.com</p>
                            <p className="mb-2">Phone: +1 251-283-4593</p>
                            <p>30 North Gould Street, Sheridan, WY 82801, United States</p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
