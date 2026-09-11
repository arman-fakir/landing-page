import productConfig from "../config/productConfig";

export default function Reviews() {
  const { reviews } = productConfig;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
        <div className="divider-leaf"></div>
        <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-forest-600">
          যারা ব্যবহার করেছেন, তারা কী বলছেন
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {reviews.map((r) => (
          <div key={r.name} className="bg-sage rounded-xl p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={`https://placehold.co/44x44/1B3A2F/FAF6EE?text=${r.initials}`}
                alt=""
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-sm">{r.name}</p>
                <p className="text-xs text-charcoal/50">{r.location}</p>
              </div>
            </div>
            <div className="rating rating-sm mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <input
                  key={i}
                  type="radio"
                  name={`rating-${r.name}`}
                  className="mask mask-star-2 bg-gold-400"
                  checked={i === r.rating}
                  readOnly
                />
              ))}
            </div>
            <p className="text-sm text-charcoal/80">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
