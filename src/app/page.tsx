import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/app/_components/hero";
import BestRealEstate from "@/app/_components/best realestate";
import 'react-date-range/dist/styles.css'; // Main style
import 'react-date-range/dist/theme/default.css'; // Theme css
import Features from "./_components/features";
export default function Home() {
  return (
    <main>
      <Header/>
      <HeroSection/>
      <BestRealEstate/>
      <Features/>
      <Footer/>
    </main>
 
  );
}
