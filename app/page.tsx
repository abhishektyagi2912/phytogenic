import Info from "@/components/Info";
import ProductSection from "@/components/Products";
import TherapeuticSection from "@/components/SomeChange";
import AboutSection from "@/components/details";
import Main from "@/components/main";
import Category from "./Product/page";

export default function Home() {
  return (
    <>
      <Main />
      <Category/>
      <ProductSection />
      <Info />
      <AboutSection />
      <TherapeuticSection />
    </>
  );
}
