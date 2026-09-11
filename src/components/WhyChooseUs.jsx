import productConfig from "../config/productConfig";

export default function WhyChooseUs() {
  const { trustPoints } = productConfig;

  return (
    <section className="bg-forest-600 text-ivory py-10 sm:py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="w-11 h-0.5 bg-gold-400 mx-auto mb-4"></div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl mb-2">কেন আমাদের থেকে কিনবেন</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 text-center">
          {trustPoints.map((t) => (
            <div key={t.title} className="p-3 sm:p-4">
              <p className="font-semibold text-xs sm:text-sm mb-1">{t.title}</p>
              <p className="text-xs text-forest-200">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
