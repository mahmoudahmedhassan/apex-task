import Image from "next/image";
import hero from "@/assets/images/hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative   w-[95%] mx-auto  mt-6   min-h-[500px] flex flex-col items-center justify-center text-white text-center">

      <div className="absolute inset-0 w-full h-full ">
        <Image
          src={hero}
          alt="Hero background"
          fill
          className="object-cover rounded-2xl"
          priority
        />
        <div className="absolute inset-0 bg-black/80 rounded-2xl"></div>
      </div>

      <div className="relative z-10 px-4">
        <p className="text-lg mb-2">
          شقة، فندق، بيت، استراحة، فيلا، كارفان ...
        </p>
        <h1 className="text-2xl md:text-[36px] font-bold leading-relaxed">
          استأجر العقار الذي يناسبك في عمّان بسهولة وراحة!
        </h1>
      </div>
     </section>
  );
}
