'use client';

import { useState } from 'react';

const contacts = [
  ['Email', 'aya.yakoulti1999@gmail.com', 'mailto:aya.yakoulti1999@gmail.com'],
  ['Business phone', '+1 251-283-4593', 'tel:+12512834593'],
  ['Management', 'RIFTEDCARS LLC', null],
  ['Location', '30 North Gould Street, Sheridan, WY 82801, United States', null],
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <section className="page-hero">
        <div className="site-container max-w-4xl">
          <p className="eyebrow">Contact</p>
          <h1 className="display-title">Tell us what you are building.</h1>
          <p className="body-large mt-7 max-w-2xl">Share the goal, scope, and timing. We will reply within one business day with the most useful next step.</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <aside>
            <p className="eyebrow">Direct details</p>
            <div className="border-t border-[#cfc4be]">
              {contacts.map(([label, value, href]) => (
                <div key={label} className="border-b border-[#cfc4be] py-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9a8056]">{label}</p>
                  {href ? <a href={href} className="mt-2 block break-words text-sm font-semibold leading-6 transition hover:text-primary">{value}</a> : <p className="mt-2 text-sm font-semibold leading-6">{value}</p>}
                </div>
              ))}
            </div>
            <div className="mt-8 border border-[#d7cdc7] bg-[#efe8df] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Business information</p>
              <p className="mt-3 text-sm leading-7 text-[#665b58]">GOOBA GLOBAL LTD is managed by RIFTEDCARS LLC and led by CEO Aya Yakoulti.</p>
            </div>
          </aside>

          <div className="surface-card p-6 sm:p-9 lg:p-11">
            <div className="border-b border-[#ded5cf] pb-7">
              <p className="eyebrow">Project enquiry</p>
              <h2 className="text-4xl sm:text-5xl">Start with the essentials.</h2>
            </div>

            {submitted ? (
              <div className="mt-8 border border-[#cabcb4] bg-[#efe8df] p-7">
                <h3 className="text-3xl">Thank you.</h3>
                <p className="mt-3 text-sm leading-7 text-[#665b58]">Your enquiry has been captured in this preview. For immediate contact, email aya.yakoulti1999@gmail.com.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="btn-secondary mt-6">Send another enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-6 sm:grid-cols-2">
                <label className="text-xs font-bold text-[#4d4341]">Full name *<input required name="name" className="field mt-2" placeholder="Your name" /></label>
                <label className="text-xs font-bold text-[#4d4341]">Email address *<input required type="email" name="email" className="field mt-2" placeholder="you@example.com" /></label>
                <label className="text-xs font-bold text-[#4d4341]">Phone number<input type="tel" name="phone" className="field mt-2" placeholder="Optional" /></label>
                <label className="text-xs font-bold text-[#4d4341]">What do you need? *
                  <select required name="service" className="field mt-2">
                    <option value="">Select a service</option>
                    <option>Launch Website</option>
                    <option>Growth Website</option>
                    <option>Custom Website</option>
                    <option>Digital Product Support</option>
                  </select>
                </label>
                <label className="text-xs font-bold text-[#4d4341] sm:col-span-2">Project details *<textarea required name="message" rows={6} className="field mt-2 resize-y" placeholder="What are you building, who is it for, and when do you want to launch?" /></label>
                <div className="sm:col-span-2"><button type="submit" className="btn-primary w-full sm:w-auto">Send project enquiry <span>↗</span></button></div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
