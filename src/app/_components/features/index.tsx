"use client";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { properties } from "@/constants";
import { Star } from "lucide-react";
import CardSlider from "@/components/ui/card-slider";
import Card from "@/components/ui/card";
import { SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <MaxWidthWrapper className="my-16">
      <SectionHeader
        title="الميزات الرئيسية"
        description="تصفح الميزات الرئيسية التي تميز خدماتنا"
        icon={<Star className="text-blue-600" />}
        align="left"
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
