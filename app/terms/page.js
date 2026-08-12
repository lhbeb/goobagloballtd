import StripeLogo from '../components/StripeLogo';

export const metadata = {
    title: "Terms of Service",
    description: "Read our terms of service for web design services.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="site-container">
                    <div className="max-w-3xl">
                        <p className="eyebrow">Legal</p>
                        <h1 className="display-title">Terms of Service</h1>
                        <p className="mt-6 text-sm text-[#746966]">
                            Last Updated: August 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 sm:py-20">
                <div className="site-container">
                    <div className="surface-card mx-auto max-w-4xl p-7 sm:p-12">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 mb-8">
                                Welcome to the GOOBA GLOBAL LTD store, managed by RIFTEDCARS LLC. By engaging our web design services, you agree to be bound by these Terms of Service.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">1. Services</h2>
                            <p className="text-gray-700 mb-6">
                                Gooba Global LTD provides professional web design and development services. The specific services, deliverables, timeline, and pricing will be outlined in a separate project agreement or proposal.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">2. Payment Terms</h2>
                            <p className="text-gray-700 mb-4">
                                <strong>2.1 Pricing:</strong> Our website services start from $650 as outlined on our website. Final pricing is determined by the selected package and specific project requirements.
                            </p>
                            <p className="text-gray-700 mb-4">
                                <span className="mb-2 inline-flex items-center gap-2"><StripeLogo className="h-8 w-auto rounded border border-gray-100" /><strong>2.2 Digital Product Payments</strong></span><br />
                                All transactions for digital products are processed using Stripe as our third-party payment gateway. Stripe&apos;s services and terms may also apply to the payment transaction.
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>2.3 Service Payment Schedule:</strong> Unless otherwise agreed, payment terms are as follows:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                                <li>50% deposit required to commence work</li>
                                <li>50% due upon project completion and before final delivery</li>
                            </ul>
                            <p className="text-gray-700 mb-6">
                                <strong>2.4 Late Payments:</strong> Payments not received within 14 days of the due date may result in project suspension and/or late fees.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">3. Project Timeline</h2>
                            <p className="text-gray-700 mb-6">
                                We will provide an estimated timeline for your project. While we strive to meet all deadlines, timelines are estimates and may be affected by factors including client feedback delays, scope changes, or unforeseen technical issues.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">4. Client Responsibilities</h2>
                            <p className="text-gray-700 mb-4">
                                The client agrees to:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                                <li>Provide all necessary materials, content, and information in a timely manner</li>
                                <li>Respond to requests for feedback within a reasonable timeframe</li>
                                <li>Ensure all provided content is legally owned or licensed for use</li>
                                <li>Make timely payments as agreed</li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-6">5. Revisions</h2>
                            <p className="text-gray-700 mb-6">
                                Each service package includes a specified number of revision rounds. Additional revisions beyond the agreed scope may incur extra charges. Major scope changes will require a new agreement and additional payment.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">6. Intellectual Property</h2>
                            <p className="text-gray-700 mb-4">
                                <strong>6.1 Ownership:</strong> Upon receipt of full payment, all custom work created specifically for your project will be transferred to you.
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>6.2 Portfolio Rights:</strong> Gooba Global LTD reserves the right to display completed projects in our portfolio and marketing materials unless otherwise agreed in writing.
                            </p>
                            <p className="text-gray-700 mb-6">
                                <strong>6.3 Third-Party Assets:</strong> Any third-party assets (fonts, stock images, plugins) used in your project remain the property of their respective owners and may require separate licensing.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">7. Support and Maintenance</h2>
                            <p className="text-gray-700 mb-6">
                                Post-launch support is included for the period specified in your service package (typically 30-60 days). This covers bug fixes and minor adjustments. Ongoing maintenance, updates, and new features can be arranged separately.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">8. Cancellation and Refunds</h2>
                            <p className="text-gray-700 mb-6">
                                If you wish to cancel a project, you must notify us in writing. Deposits are non-refundable. You will be invoiced for all work completed up to the cancellation date.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">9. Warranties and Disclaimers</h2>
                            <p className="text-gray-700 mb-6">
                                We warrant that all work will be performed professionally and competently. However, we cannot guarantee specific results, rankings, or business outcomes. Websites are delivered &quot;as is&quot; after the agreed testing phase.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">10. Limitation of Liability</h2>
                            <p className="text-gray-700 mb-6">
                                Gooba Global LTD&apos;s liability is limited to the amount paid for the services. We are not liable for indirect, incidental, or consequential damages.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">11. Confidentiality</h2>
                            <p className="text-gray-700 mb-6">
                                Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the project.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">12. Governing Law</h2>
                            <p className="text-gray-700 mb-6">
                                These terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States of America. Any disputes will be resolved in the courts of Wyoming.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">13. Changes to Terms</h2>
                            <p className="text-gray-700 mb-6">
                                We reserve the right to update these terms at any time. Material changes will be communicated to active clients. Your continued use of our services constitutes acceptance of any changes.
                            </p>

                            <h2 className="text-3xl font-bold mt-12 mb-6">14. Contact Information</h2>
                            <p className="text-gray-700 mb-2">
                                For questions about these Terms of Service, please contact us:
                            </p>
                            <div className="bg-secondary p-6 rounded-xl mt-4">
                                <p className="text-gray-800 mb-2"><strong>Gooba Global LTD</strong></p>
                                <p className="text-gray-700 mb-2">Management company: RIFTEDCARS LLC</p>
                                <p className="text-gray-700 mb-2">Chief Executive Officer: Aya Yakoulti</p>
                                <p className="text-gray-700 mb-2">Website: goobagloballtd.com</p>
                                <p className="text-gray-700 mb-2">Email: aya.yakoulti1999@gmail.com</p>
                                <p className="text-gray-700 mb-2">Phone: +1 251-283-4593</p>
                                <p className="text-gray-700">Address: 30 North Gould Street, Sheridan, WY 82801, United States of America</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
