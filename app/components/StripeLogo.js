import Image from 'next/image';

export default function StripeLogo({ className = 'h-7 w-auto' }) {
    return (
        <Image
            src="/stripe%20logo.svg"
            alt="Stripe"
            width={120}
            height={60}
            className={className}
            unoptimized
        />
    );
}
