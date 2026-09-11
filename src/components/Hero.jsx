import productConfig from "../config/productConfig";

export default function Hero() {
  const { product } = productConfig;

  return (
    <section className="bg-forest-600 text-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-8 pb-8 sm:pb-12 lg:py-16 xl:py-20 grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-forest-500/40 border border-forest-300/40 rounded-full px-3 py-1 text-xs sm:text-sm text-sage mb-4 sm:mb-5">
            <span>{product.badge}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-3 sm:mb-4">
            {product.headline}
          </h1>
          <p className="text-forest-100 text-sm sm:text-base lg:text-lg mb-5 sm:mb-6 max-w-md">
            {product.subheadline}
          </p>
          <ul className="space-y-2 mb-6 sm:mb-7 text-sm sm:text-base">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="text-gold-400 mt-0.5">✓</span> {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-3">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gold-400">৳{product.price}</span>
            <span className="text-forest-300 line-through text-base sm:text-lg">৳{product.oldPrice}</span>
            <span className="bg-gold-400 text-forest-700 text-xs font-semibold px-2 py-1 rounded">
              {product.discountLabel}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-forest-200 mb-5 sm:mb-6">{product.warranty}</p>
          <a
            href="#order"
            className="btn-cta block md:inline-block text-center rounded-lg px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg shadow-sm"
          >
            অর্ডার করুন
          </a>
          <p className="text-xs text-forest-200 mt-3">
            ক্যাশ অন ডেলিভারি সুবিধা সারাদেশে উপলব্ধ
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="bg-sage rounded-2xl p-5 sm:p-6 lg:p-10">
            <img
              src={product.heroImage}
              alt={product.name}
              className="rounded-xl w-full h-auto object-cover max-h-[280px] sm:max-h-[360px] md:max-h-none mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
