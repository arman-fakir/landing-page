import productConfig from "../config/productConfig";

export default function ProductDetails() {
  const { specs, product } = productConfig;

  const rows = [
    { label: "ব্র্যান্ড", value: specs.brandName },
    { label: "উৎপাদন দেশ", value: specs.origin },
    { label: "পণ্যের ধরন", value: specs.type },
    { label: "ফ্রেম", value: specs.frame },
    { label: "রেজিস্ট্যান্স", value: specs.resistance },
    { label: "ডিসপ্লে", value: specs.display },
    { label: "ডিসপ্লে ফাংশন", value: specs.displayFunctions },
    { label: "পেডাল", value: specs.pedal },
    { label: "ব্যবহার", value: specs.usage },
    { label: "সর্বোচ্চ ব্যবহারকারী ওজন", value: specs.maxWeight },
  ];

  return (
    <section className="bg-sage py-10 sm:py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-10 items-start">
        <div>
          <div className="divider-leaf"></div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-forest-600 mb-4 sm:mb-6">
            প্রোডাক্ট বিস্তারিত
          </h2>
          <dl className="divide-y divide-forest-200">
            {rows.map((r) => (
              <div key={r.label} className="py-2.5 sm:py-3 flex justify-between gap-4">
                <dt className="text-charcoal/60 text-xs sm:text-sm">{r.label}</dt>
                <dd className="text-xs sm:text-sm font-medium text-right">{r.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 sm:mt-6">
            <h3 className="font-semibold mb-2 text-sm">বৈশিষ্ট্য</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-charcoal/70">
              {productConfig.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-gold-500 mt-0.5">•</span> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src={product.heroImage}
          alt="Padel Exercise Cycle"
          className="rounded-xl w-full h-auto object-cover max-h-[420px] mx-auto"
        />
      </div>
    </section>
  );
}
