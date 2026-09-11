import productConfig from "../config/productConfig";

export default function LifestyleVisual() {
  const { product } = productConfig;
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <img
          src={product.heroImage}
          alt="ব্যবহারের ছবি"
          className="rounded-xl w-full h-full object-cover col-span-2 lg:col-span-1 lg:row-span-2 lg:h-auto"
        />
        <img
          src="https://placehold.co/400x250/E7EFE8/1B3A2F?text=LCD+Display"
          alt="LCD ডিসপ্লে"
          className="rounded-xl w-full object-cover"
        />
        <img
          src="https://placehold.co/400x250/E7EFE8/1B3A2F?text=Compact+Design"
          alt="কমপ্যাক্ট ডিজাইন"
          className="rounded-xl w-full object-cover"
        />
      </div>
    </section>
  );
}
