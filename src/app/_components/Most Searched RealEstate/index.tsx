"use client";

import { ScanSearch } from "lucide-react";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { properties } from "@/constants";
import CardSlider from "@/components/ui/card-slider";
import Card from "@/components/ui/card";
import { SwiperSlide } from "swiper/react";
export default function MostSearchedRealEstate() {
  return (
    <MaxWidthWrapper>
      <SectionHeader
        title="العقارات الأكثر بحثا"
        description="أفضل المواقع والعروض التي يبحث عنها الجميع"
        icon={<ScanSearch className="text-blue-600" />}
      />
      <CardSlider
        showNavigation={true}
        showPagination={false}
        autoplay={false}
        slidesPerView={4}
        spaceBetween={24}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <Card property={property} />
          </SwiperSlide>
        ))}
      </CardSlider>
    </MaxWidthWrapper>
  );
}
