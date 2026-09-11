import { useState } from "react";
import productConfig from "../config/productConfig";

const SECRET_KEY = "asianSky_padel_2026_x7k9";

export default function OrderForm() {
  const { product, googleScriptUrl } = productConfig;

  const [form, setForm] = useState({
    quantity: product.quantityOptions[0].value,
    name: "",
    phone: "",
    district: "",
    address: "",
    website: "", // Honeypot Field (Hidden input)
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Honeypot Security Check (Bot Attack Detection)
    if (form.website) {
      // বট ধরে ফেলার পর সাকসেস মেসেজ দেখালেও ডাটা সেন্ড করা হবে না
      setSubmitted(true);
      return;
    }

    // Input Data Trimming & Sanitization
    const sanitizedName = form.name.trim();
    const sanitizedPhone = form.phone.trim();
    const sanitizedDistrict = form.district.trim();
    const sanitizedAddress = form.address.trim();

    // 2. Field Validation
    if (!sanitizedName || !sanitizedPhone || !sanitizedAddress) {
      setError("নাম, মোবাইল নম্বর ও ঠিকানা সঠিকভা‌বে দিন।");
      return;
    }

    // 3. BD Phone Validation
    const bdPhoneRegex = /^01[3-9]\d{8}$/;
    if (!bdPhoneRegex.test(sanitizedPhone)) {
      setError("সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)।");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Honeypot ফিল্ড ট্রিম করে মূল ডাটা অবজেক্ট তৈরি
      const payload = {
        secret: SECRET_KEY,
        quantity: form.quantity,
        name: sanitizedName,
        phone: sanitizedPhone,
        district: sanitizedDistrict,
        address: sanitizedAddress,
        submittedAt: new Date().toISOString(), // Timestamp for backend validation
      };

      await fetch(googleScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch (err) {
      setError("অর্ডার পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন বা সরাসরি ফোন করুন।");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = 
    "w-full text-white bg-forest-800/90 placeholder-forest-300/60 border border-forest-400/30 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all";

  return (
    <section id="order" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 scroll-mt-16">
      <div className="bg-forest-600 text-ivory rounded-2xl p-5 sm:p-8 lg:p-10 grid md:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <img
            src={product.heroImage}
            alt={product.name}
            className="rounded-xl w-full h-auto object-cover mb-4 sm:mb-5 max-h-[260px] mx-auto"
          />
          <h3 className="font-display text-lg sm:text-xl mb-1">{product.name}</h3>
          <p className="text-sm text-forest-200 mb-2">{product.warranty}</p>
          <div className="flex items-baseline gap-3">
            <span className="text-xl sm:text-2xl font-semibold text-gold-400">৳{product.price}</span>
            <span className="text-forest-300 line-through">৳{product.oldPrice}</span>
          </div>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center bg-forest-500/30 rounded-lg p-6">
            <p className="font-display text-xl mb-2">ধন্যবাদ, {form.name}!</p>
            <p className="text-sm text-forest-100">
              আপনার অর্ডারটি পেয়েছি। শীঘ্রই ফোনে যোগাযোগ করে অর্ডার নিশ্চিত করা হবে।
            </p>
          </div>
        ) : (
          <form className="space-y-2.5 sm:space-y-3" onSubmit={handleSubmit} noValidate>
            
            {/* Hidden Honeypot Field */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div>
              <label className="text-xs text-forest-200 block mb-1">পরিমাণ</label>
              <select
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                className={`${inputStyle} cursor-pointer`}
              >
                {product.quantityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-forest-800 text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-forest-200 block mb-1">আপনার নাম</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="নাম লিখুন"
                className={inputStyle}
              />
            </div>
            <div>
              <label className="text-xs text-forest-200 block mb-1">মোবাইল নম্বর</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
                className={inputStyle}
              />
            </div>
            <div>
              <label className="text-xs text-forest-200 block mb-1">জেলা / এলাকা</label>
              <input
                type="text"
                name="district"
                value={form.district}
                onChange={handleChange}
                placeholder="যেমন: খুলনা"
                className={inputStyle}
              />
            </div>
            <div>
              <label className="text-xs text-forest-200 block mb-1">সম্পূর্ণ ঠিকানা</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                rows="2"
                placeholder="বাসা/রোড/এলাকার বিস্তারিত ঠিকানা"
                className={inputStyle}
              />
            </div>

            {error && <p className="text-red-300 text-xs bg-red-900/30 p-2 rounded border border-red-500/30">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="btn-cta w-full rounded-lg px-6 py-3.5 sm:py-4 text-base sm:text-lg mt-2 border-none disabled:opacity-70 font-medium flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="inline-block w-5 h-5 border-2 border-forest-600 border-t-transparent rounded-full animate-spin"></span>
                  <span>পাঠানো হচ্ছে...</span>
                </>
              ) : (
                "অর্ডার কনফার্ম করুন"
              )}
            </button>

            <p className="text-xs text-forest-300 text-center">
              ক্যাশ অন ডেলিভারি • প্রোডাক্ট হাতে পেয়ে টাকা দিন
            </p>
          </form>
        )}
      </div>
    </section>
  );
}