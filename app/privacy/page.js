export const metadata = {
    title: 'Privacy Policy',
    description: 'How GOOBA GLOBAL LTD collects, uses, and shares personal information.',
};

const contact = [
    'GOOBA GLOBAL LTD',
    'Store operator: RIFTEDCARS LLC',
    'Email: aya.yakoulti1999@gmail.com',
    'Phone: +1 251-283-4593',
    '30 North Gould Street, Sheridan, WY 82801, United States',
];

export default function PrivacyPage() {
    return (
        <div className="min-h-screen">
            <section className="page-hero">
                <div className="site-container max-w-3xl">
                    <p className="eyebrow">Legal</p>
                    <h1 className="display-title">Privacy Policy</h1>
                    <p className="mt-6 text-sm text-[#746966]">Last updated: August 2026</p>
                </div>
            </section>

            <section className="py-16 sm:py-20">
                <div className="site-container">
                    <article className="surface-card mx-auto max-w-4xl p-7 text-gray-700 sm:p-12">
                        <p className="text-xl leading-8">
                            This policy explains how GOOBA GLOBAL LTD and its operator, RIFTEDCARS LLC, handle information when you visit this website, contact us, buy a product, or hire us.
                        </p>

                        <h2 className="mt-12 text-3xl">1. Information you provide</h2>
                        <p className="mt-4 leading-7">You may provide your name, email address, phone number, business name, project details, and messages when you contact us.</p>
                        <p className="mt-4 leading-7">The website does not provide an on-site contact form. Use the listed email address to contact us.</p>

                        <h2 className="mt-12 text-3xl">2. Visitor data collected automatically</h2>
                        <p className="mt-4 leading-7">When a page loads, the website currently records technical visit data, including:</p>
                        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
                            <li>IP address and approximate IP-based location</li>
                            <li>Page URL, referring page, access time, and domain</li>
                            <li>Browser, operating system, device type, language, and time zone</li>
                            <li>Screen size, viewport size, device memory, processor count, touch support, and related browser signals</li>
                            <li>A fingerprint hash created from those browser and device signals</li>
                        </ul>
                        <p className="mt-4 leading-7">IP location may be looked up through ipwho.is or ipapi.co. Visit notifications, including the technical data above, may be sent to RIFTEDCARS LLC through Telegram.</p>

                        <h2 className="mt-12 text-3xl">3. How we use information</h2>
                        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
                            <li>Respond to enquiries</li>
                            <li>Provide purchased products or contracted services</li>
                            <li>Operate, secure, and troubleshoot the website</li>
                            <li>Understand website visits</li>
                            <li>Meet legal obligations</li>
                        </ul>

                        <h2 className="mt-12 text-3xl">4. Payment information</h2>
                        <p className="mt-4 leading-7">Online checkout is not active. Do not submit card information through this website or send it by email.</p>
                        <p className="mt-4 leading-7">If Stripe checkout is enabled later, Stripe will handle payment information under its own privacy policy. GOOBA GLOBAL LTD will not store full card numbers.</p>

                        <h2 className="mt-12 text-3xl">5. Sharing</h2>
                        <p className="mt-4 leading-7">We do not sell personal information. Information may be shared with service providers used to run the website and business, including hosting providers, IP-location services, Telegram, and—when enabled—Stripe. We may also disclose information when required by law or as part of a business transfer.</p>

                        <h2 className="mt-12 text-3xl">6. Cookies</h2>
                        <p className="mt-4 leading-7">This website does not use advertising or newsletter cookies. The website platform may set necessary cookies. You can control cookies in your browser.</p>

                        <h2 className="mt-12 text-3xl">7. Retention and security</h2>
                        <p className="mt-4 leading-7">We retain information only as long as needed for enquiries, orders, services, security, and legal obligations. We use reasonable safeguards, but no website or electronic transmission is completely secure.</p>

                        <h2 className="mt-12 text-3xl">8. Your choices and rights</h2>
                        <p className="mt-4 leading-7">Depending on where you live, you may request access to, correction of, or deletion of your personal information, or object to certain uses. Contact us to make a request.</p>

                        <h2 className="mt-12 text-3xl">9. International processing</h2>
                        <p className="mt-4 leading-7">Information may be processed in the United States or in countries where our service providers operate.</p>

                        <h2 className="mt-12 text-3xl">10. Changes and contact</h2>
                        <p className="mt-4 leading-7">We may update this policy. The date at the top of this page shows the latest version.</p>
                        <div className="mt-6 bg-secondary p-6">
                            {contact.map((line) => <p key={line} className="mb-2 last:mb-0">{line}</p>)}
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
