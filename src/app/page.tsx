import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/app/_components/hero";
import BestRealEstate from "@/app/_components/best realestate";
import Features from "./_components/features";
import AddRealestate from "./_components/add realestate";
import Categories from "./_components/categories";
import MostSearchedRealEstate from "./_components/Most Searched RealEstate";
export default function Home() {
  return (
    <main>
      <Header/>
      <HeroSection/>
      <BestRealEstate/>
      <Features/>
      <AddRealestate/>
      <Categories/>
      <MostSearchedRealEstate/>
      <Footer/>
    </main>
 
  );
}
