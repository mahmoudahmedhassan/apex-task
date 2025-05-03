import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { footerData } from "@/constants";
import Image from "next/image";
import React from "react";
import Subscribe from "./subscribe";

export default function Footer() {
  return (
    <footer className="bg-[#1D252D] ">
      <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[10px] 2xl:gap-10  py-12 border-b border-[#999999]">
        {/* Logo + Description + Social */}
        <div className="flex flex-col gap-10">
          <div>
            <Image
              src={footerData.logo.imageSrc}
              alt={footerData.logo.alt}
              width={100}
              height={100}
            />
          </div>

          <p className="text-[#999999] text-sm max-w-[307px] leading-8">
            {footerData.logo.description}
          </p>

          <div className="flex gap-2">
            {footerData.socialLinks.map((socialLink) => (
              <a
                className="flex items-center gap-2"
                key={socialLink.label}
                href={socialLink.href}
              >
                <Image
                  width={29}
                  height={29}
                  src={socialLink.icon}
                  alt={socialLink.icon}
                />
              </a>
            ))}
          </div>
        </div>
        {/* Links */}
        {/* Footer Columns */}
        <div className="flex gap-[30px]">
          {footerData.columns.slice(0, 2).map((col, colIdx) => (
            <div key={colIdx} className="flex-1/2">
              <h3 className=" text-white font-medium mb-5">{col.title}</h3>
              <ul className="space-y-5 text-sm text-[#999999]">
                {col.links?.map((link, linkIdx) => (
                  <li key={linkIdx} className="hover:text-white">
                    <a href={link.href} className="hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {/* Store Buttons */}
          <div>
            <h3 className=" text-white font-medium mb-5">
              {footerData.columns[2].title}
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              {footerData.columns[2].storeButtons?.map((btn, idx) => (
                <a
                  key={idx}
                  href={btn.href}
                  className="flex  items-center bg-[#2d343c] px-4 py-3 rounded-lg gap-4 max-w-[178px] w-full hover:bg-gray-700"
                >
                  <div className="text-left border-l border-[#999999] pl-4">
                    <div className="text-[11px] text-[#999999]">{btn.subLabel}</div>
                    <div className="font-bold text-sm text-white">{btn.label}</div>
                  </div>
                  <Image
                    src={btn.icon}
                    alt={btn.label}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <Subscribe />
        </div>
      </MaxWidthWrapper>
      {/* Copyright */}
      <div className="flex justify-center items-center py-5">
        <p className="text-white text-sm">{footerData.copyright}</p>
      </div>
    </footer>
  );
}
