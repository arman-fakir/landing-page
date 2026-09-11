import productConfig from "../config/productConfig";

export default function Benefits() {
  const { benefits } = productConfig;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 lg:mb-14">
        <div className="divider-leaf"></div>
        <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-forest-600 mb-2 sm:mb-3">
          কেন এই সাইকেলটি আপনার দরকার
        </h2>
        <p className="text-charcoal/70 text-sm lg:text-base">
          ব্যস্ত জীবনে জিমে যাওয়ার সময় না থাকলেও ঘরে বসেই নিয়মিত কার্ডিও ব্যায়াম করা সম্ভব — এই
          এক্সারসাইজ সাইকেলটি সেই সমাধান দেয়।
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {benefits.map((b, i) => (
          <div key={b.title} className="border border-forest-100 rounded-xl p-5 sm:p-6">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-sage flex items-center justify-center text-forest-600 mb-3 sm:mb-4 text-base sm:text-lg">
              {i + 1}
            </div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">{b.title}</h3>
            <p className="text-sm text-charcoal/70">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
