import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import AddRealty from "./add-realty";
import LanguageSwitcher from "./language-switcher";
import AuthButtons from "./auth-buttons";

function Header() {
  return (
    <div className="xs:h-14 lg:h-18 border-b border-gray-200  flex-1 flex">
      <MaxWidthWrapper className="flex justify-between items-center">
        <Logo />
        <Navbar />
        <div className="hidden lg:flex gap-4 items-center">
          <LanguageSwitcher />
          <AuthButtons />
          <AddRealty />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Header;
