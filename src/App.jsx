import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ProductDetails from "./components/ProductDetails";
import LifestyleVisual from "./components/LifestyleVisual";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import OrderForm from "./components/OrderForm";
import StickyMobileCta from "./components/StickyMobileCta";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <Hero />
      <Benefits />
      <ProductDetails />
      {/* <LifestyleVisual /> */}
      <WhyChooseUs />
      <Reviews />
      <Faq />
      <OrderForm />
      <StickyMobileCta />
      <Footer />
    </div>
  );
}

export default App;
