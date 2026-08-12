import StripeLogo from './StripeLogo';

export default function StripeNotice() {
  return (
    <aside className="border-y border-[#ded5cf] bg-[#efe8df]" aria-label="Payment gateway information">
      <div className="site-container flex flex-col items-center justify-between gap-3 py-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <StripeLogo className="h-7 w-auto rounded-sm" />
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#4c4140]">Secure digital checkout</span>
        </div>
        <p className="text-xs leading-5 text-[#6f6461]">
          All digital-product transactions use Stripe as the payment gateway.
        </p>
      </div>
    </aside>
  );
}
