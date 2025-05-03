"use client";
import { properties } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { Heart, MapPin, Star } from "lucide-react";
import {  bathroom, area, bedroom } from "@/assets/svg";
export default function Card({
  property,
}: {
  property: (typeof properties)[0];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const mainImage = isHovered ? property.image[1] : property.image[0];

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };

  return (
    <div
      className="rounded-2xl shadow-md overflow-hidden border transition-transform duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={mainImage}
          alt={property.title}
          fill
          className="object-cover transition-opacity duration-300"
        />
        {property.isFeatured && (
          <span className="absolute top-2 right-2   text-xs font-medium rounded-[40px]  bg-gradient-to-r from-[#FFE371] to-[#F4B227] px-4 py-2 text-black">
            مميز
          </span>
        )}
        <button
          onClick={toggleFavorite}
          className="absolute top-2 left-2 p-2 rounded-full bg-white/40 hover:bg-white cursor-pointer transition-colors duration-200"
        >
          <Heart
            className={`w-5 h-5 transition-all duration-200 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>

      <div className="p-4 text-right flex flex-col gap-[10px]">
        <div className="flex justify-between items-center">
          <p className=" flex items-center gap-1">
            <span className="font-bold text-xl text-[#33264C]">
              {property.price} {property.currency}
            </span> 
            <span className="text-[#33264C] text-sm">
              / ليلة
            </span>
          </p>
          <p className="text-sm  flex items-center gap-1 bg-[#F5F5F5] rounded-full px-2 py-1 mt-1">
          <span className="text-[#A0A5B6] text-sm">({property.reviewsCount})</span>   <span className="text-[#33264C] text-sm">{property.rating} </span>  <Star className="w-4 h-4 text-[#FFB700]"  />
          </p>

        </div>

        <h3 className="font-medium text-[#33264C]">{property.title}</h3>
        <p className="text-[#999999] text-sm flex items-center gap-2"> <MapPin className="w-4 h-4 text-[#3C69E3]" /> <span> {property.location}</span> </p>

        <div className="mt-2 text-xs text-gray-500 flex justify-center gap-3 ">
          <p className="flex items-center gap-2"> <Image src={bedroom} alt="bed"/> <span> {property.bedrooms} غرف نوم</span></p>
          <p className="flex items-center gap-2"> <Image src={bathroom} alt="bathroom" /> <span> {property.bathrooms} حمام</span> </p>
          <p className="flex items-center gap-2"> <Image src={area} alt="area" /> <span> {property.area}</span> </p>
        </div>
      </div>
    </div>
  );
}
