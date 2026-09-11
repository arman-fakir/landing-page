import productConfig from "../config/productConfig";

export default function StickyMobileCta() {
  const { product, brand } = productConfig;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-forest-100 px-4 py-3 flex items-center gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
      <div className="leading-tight">
        <p className="text-xs text-charcoal/50">এখনই মাত্র</p>
        <p className="font-semibold text-forest-600">৳{product.price}</p>
      </div>

      <a
        href={brand.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#25D366] text-white shrink-0"
        aria-label="WhatsApp এ কথা বলুন"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.82 14.13c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.9-1.25-4.79-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.15.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.45.29.15.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.92.29.15.48.22.55.34.07.13.07.72-.17 1.4z" />
        </svg>
      </a>

      <a href="#order" className="btn-cta flex-1 text-center rounded-lg py-3 text-sm">
        অর্ডার করুন
      </a>
    </div>
  );
}