
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import ProductSection from "@/components/Products";
import Slider from "@/components/Slider";
import TherapeuticSection from "@/components/SomeChange";
import AboutSection from "@/components/details";
import Main from "@/components/main";

export default function Home() {
  return (
    <>
      <Main />
      <Slider />
      <ProductSection />
      <Info />
      <AboutSection />
      <TherapeuticSection />
      <Footer />
    </>
  );
}
