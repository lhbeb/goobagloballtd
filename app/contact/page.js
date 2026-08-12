const contacts = [
  ['Email', 'aya.yakoulti1999@gmail.com', 'mailto:aya.yakoulti1999@gmail.com'],
  ['Business phone', '+1 251-283-4593', 'tel:+12512834593'],
  ['Store operator', 'RIFTEDCARS LLC', null],
  ['Location', '30 North Gould Street, Sheridan, WY 82801, United States', null],
];

export default function ContactPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="site-container max-w-4xl">
          <p className="eyebrow">Contact</p>
          <h1 className="display-title">Tell us what you need.</h1>
          <p className="body-large mt-7 max-w-2xl">Send your project details or contact us directly by email or phone.</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <aside>
            <p className="eyebrow">Contact details</p>
            <div className="border-t border-[#cfc4be]">
              {contacts.map(([label, value, href]) => (
                <div key={label} className="border-b border-[#cfc4be] py-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9a8056]">{label}</p>
                  {href ? <a href={href} className="mt-2 block break-words text-sm font-semibold leading-6 transition hover:text-primary">{value}</a> : <p className="mt-2 text-sm font-semibold leading-6">{value}</p>}
                </div>
              ))}
            </div>
            <div className="mt-8 border border-[#d7cdc7] bg-[#efe8df] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Company</p>
              <p className="mt-3 text-sm leading-7 text-[#665b58]">GOOBA GLOBAL LTD operates under RIFTEDCARS LLC. Aya Yakoulti is the CEO of RIFTEDCARS LLC.</p>
            </div>
          </aside>

          <div className="surface-card p-6 sm:p-9 lg:p-11">
            <div className="border-b border-[#ded5cf] pb-7">
              <p className="eyebrow">Project enquiry</p>
              <h2 className="text-4xl sm:text-5xl">Describe your project.</h2>
            </div>

            <div className="mt-8 border border-[#cabcb4] bg-[#efe8df] p-7 sm:p-8">
              <h3 className="text-3xl">Send the project details by email.</h3>
              <p className="mt-3 text-sm leading-7 text-[#665b58]">Include the type of work, required pages or features, target date, and budget range.</p>
              <ul className="mt-6 grid gap-3 text-sm font-semibold text-[#514846] sm:grid-cols-2">
                {['Website or web app', 'Pages and features', 'Target date', 'Budget range'].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-primary">—</span>{item}</li>
                ))}
              </ul>
              <a
                href="mailto:aya.yakoulti1999@gmail.com?subject=Project%20enquiry"
                className="btn-primary mt-8 w-full sm:w-auto"
              >
                Email project details <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
