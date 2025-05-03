"use client";

import { Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CardSliderProps {
  children: ReactNode;
  title?: string;
  showNavigation?: boolean;
  showPagination?: boolean;
  autoplay?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
}

export default function CardSlider({
  children,
  
  showNavigation = true,
  showPagination = true,
  autoplay = true,
  slidesPerView = 4,
  spaceBetween = 24,
}: CardSliderProps) {
  return (
    <div className="relative">
    

      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={spaceBetween}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={showPagination ? { clickable: true } : false}
          autoplay={
            autoplay ? { delay: 3000, disableOnInteraction: false } : false
          }
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: slidesPerView,
              spaceBetween: spaceBetween,
            },
          }}
          className="!pb-12"
        >
          {children}
        </Swiper>

        {showNavigation && (
          <>
            <button className="swiper-button-prev absolute top-1/2 -translate-y-1/2 -left-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50">
              <ArrowBigLeft className="w-6 h-6 text-[#33264C]" />
            </button>
            <button className="swiper-button-next absolute top-1/2 -translate-y-1/2 -right-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50">
              <ArrowBigRight className="w-6 h-6 text-[#33264C]" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
