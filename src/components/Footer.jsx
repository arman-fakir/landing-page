import logo from "../assets/logo.png";
import productConfig from "../config/productConfig";

export default function Footer() {
  const { brand, footer } = productConfig;

  return (
    <footer className="bg-forest-700 text-forest-200 pt-8 sm:pt-10 pb-24 lg:pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div>
            <img src={logo} alt={brand.name} className="h-8 sm:h-9 w-auto mb-3 bg-white rounded p-1" />
            <p className="text-sm">{footer.description}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-ivory mb-2">যোগাযোগ</p>
            <p className="text-sm">
              <a href={brand.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">
                হোয়াটসঅ্যাপ: {brand.whatsapp}
              </a>
            </p>
            <p className="text-sm">
              <a href={brand.phoneLink} className="hover:text-gold-400">ফোন: {brand.phone}</a>
            </p>
            <p className="text-sm">
              <a href={`mailto:${brand.email}`} className="hover:text-gold-400">{brand.email}</a>
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-ivory mb-2">নীতিমালা</p>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:text-gold-400">ডেলিভারি ও রিটার্ন নীতি</a></li>
              <li><a href="#" className="hover:text-gold-400">প্রাইভেসি পলিসি</a></li>
              <li><a href="#" className="hover:text-gold-400">শর্তাবলি</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-forest-500 pt-4 text-xs text-center text-forest-300">
          © {footer.year} {brand.name}। সর্বস্বত্ব সংরক্ষিত। <a href="https://arman-fakir.netlify.app/">Designed & Developed by Arman Web Studio</a>
        </div>
      </div>
    </footer>
  );
}
