import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { categories } from "@/constants";
import { LayoutGrid } from "lucide-react";
import Image from "next/image";

export default function Categories() {
  return (
    <MaxWidthWrapper className="py-16">
        <SectionHeader
        title="  تصفح العقارات حسب النوع"
        description="اختر بين الشقق، الفنادق، الشاليهات، الاستراحات، الفلل، والكارفانات"
        icon={<LayoutGrid className="text-blue-600" />}
       />
            <div className="flex flex-wrap items-center justify-center gap-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-center gap-2 rounded-xl xs:w-[150] xs:h-[150px] sm:h-[188px] sm:w-[184px] border border-gray-200 bg-white shadow-sm hover:shadow-md transition  text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <Image
                src={category.image}
                alt={category.title}
                className="w-12 h-12"
              />
            </div>
            <span className=" font-semibold text-[#1D252D]">
              {category.title}
            </span>
          </div>
        ))}
      </div>

      
    </MaxWidthWrapper>
  );
}
