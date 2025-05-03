import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { MapPinned } from "lucide-react";
import { bestRealEstate } from "@/constants";
import Image from "next/image";

export default function BestRealEstate() {
  return (
    <MaxWidthWrapper className="my-16">
      <SectionHeader
        title="اكتشف أفضل العقارات في مدينتك!"
        description="تصفح العقارات المتاحة في مدن مختلفة واختر مكانك المثالي بكل سهولة."
        icon={<MapPinned className="text-blue-600" />}
        align="left"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
        {bestRealEstate.map((el) => (
          <div
            key={el.id}
            className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={el.image}
                alt={el.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="absolute text-center bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">{el.title}</h3>
              <p className="text-sm text-gray-200">{el.number}</p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
