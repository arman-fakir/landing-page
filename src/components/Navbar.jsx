import logo from "../assets/logo.png";
import productConfig from "../config/productConfig";

export default function Navbar() {
  const { brand } = productConfig;

  return (
    <header className="bg-white border-b border-forest-100 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between">
        <img src={logo} alt={brand.name} className="h-8 sm:h-9 lg:h-10 w-auto" />
        <a
          href={brand.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 text-xs lg:text-sm text-forest-600 font-medium"
        >
          {brand.whatsapp}
        </a>
      </div>
    </header>
  );
}
