import { add_realestate, add_realestate2 } from "@/assets/images";
import Button from "@/components/ui/CustomButton";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { ShieldPlus } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AddRealestate() {
  return (
    <MaxWidthWrapper className=" lg:py-16">
      <section className="relative w-full max-h-[300px] h-full rounded-2xl  text-white text-center flex flex-col lg:flex-row items-center justify-center px-4">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10 rounded-[40px]">
          <Image
            src={add_realestate}
            alt="خلفية الإعلان"
            fill
            className="object-cover rounded-[40px]"
            priority
          />
          <div
            className="absolute inset-0 bg-[#000058]/80 rounded-[40px]"
            aria-hidden="true"
          ></div>
        </div>

        {/* Text Content */}
        <div className="max-w-3xl flex flex-col items-center justify-center lg:items-start xs:p-4 lg:p-0 space-y-4 lg:mb-8">
          <h3 className="text-base font-bold  md:text-xl xl:text-2xl">
            ابدأ رحلتك العقارية وأجّر عقارك بسهولة!
          </h3>
          <p className="">
            أضف إعلانك خلال دقائق ووصل للمستأجرين المهتمين فورًا
          </p>
          <Button text=" أضف عقارك  " variant="primary" className="w-[150px]">
            <ShieldPlus className="w-4 h-4" />
          </Button>
        </div>

        {/* Real Estate Image */}
        <div className="hidden lg:block w-full max-w-xl aspect-[3/2] relative lg:-mt-[87px] ">
          <Image
            src={add_realestate2}
            alt="إعلان عقاري"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
