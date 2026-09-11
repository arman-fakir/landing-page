import productConfig from "../config/productConfig";

export default function Faq() {
  const { faqs } = productConfig;

  return (
    <section className="bg-sage py-10 sm:py-14 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <div className="divider-leaf"></div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-forest-600">সচরাচর জিজ্ঞাসা</h2>
        </div>
        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="collapse collapse-arrow bg-white rounded-lg border border-forest-100"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title font-medium text-sm">{f.q}</div>
              <div className="collapse-content text-sm text-charcoal/70">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
