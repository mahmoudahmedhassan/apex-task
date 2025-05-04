"use client"
import Image from "next/image";
import hero from "@/assets/images/hero.jpg";
import { SelectInput } from "./select-option";
import { useState } from "react";
import { filterOptions } from "@/constants";
import { DatePickerWithRange } from "./date-picker";
import CustomButton from "@/components/ui/CustomButton";
import { Search } from "lucide-react";
import RoomGuestSelect from "./number-rooms";
  
export default function HeroSection() {
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

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

      <div className="relative z-10 px-4 py-6">
        <p className="xs:text-base sm:text-lg mb-2">
          شقة، فندق، بيت، استراحة، فيلا، كارفان ...
        </p>
        <h1 className="xs:text-xl sm:text-2xl md:text-[36px] font-bold leading-relaxed">
          استأجر العقار الذي يناسبك في عمّان بسهولة وراحة!
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row my-6  items-center justify-center gap-4 bg-white rounded-[20px] p-4 z-10   ">
      <SelectInput
        {...filterOptions.propertyType}
        value={selectedPropertyType}
        onChange={setSelectedPropertyType}
      />
      <SelectInput
        {...filterOptions.city}
        value={selectedCity}
        onChange={setSelectedCity}
      />
      <SelectInput
        {...filterOptions.region}
        value={selectedRegion}
        onChange={setSelectedRegion}
      />
      <DatePickerWithRange/>
      <RoomGuestSelect/>

      <CustomButton className="mt-[30px] xs:w-full lg:w-auto">
        <Search className="w-4 h-4 text-white" />
      </CustomButton>

   

      </div>
     </section>
  );
}
