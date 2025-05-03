"use client";
import Button from "@/components/ui/button";
import { navItems } from "@/constants";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./language-switcher";
import AuthButtons from "./auth-buttons";
import AddRealty from "./add-realty";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="order-last lg:order-none">
      <Button
        variant="secondary"
        size="sm"
        className="lg:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="!w-6 !h-6" />
      </Button>

      <ul
        className={`fixed lg:static ${
          openMenu ? "right-0 z-50" : "-right-full"
        } top-0 px-4 py-10 lg:p-0 bg-white lg:bg-transparent transition-all duration-100 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10 lg:gap-[10px]`}
      >
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-10 left-10 lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6" />
        </Button>
        {navItems.map((item) => (
          <li key={item.id} className="cursor-pointer text-sm font-medium">
            <a
              href={item.href}
              className={cn(
                "p-[10px] transition-colors duration-200 hover:text-[#3C69E3] font-semibold",
                pathname === item.href && "text-[#3C69E3] font-semibold"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
        <div className="flex lg:hidden items-center gap-4">
          <LanguageSwitcher />
          <AuthButtons />
          <AddRealty />
        </div>
      </ul>
    </nav>
  );
}
