"use client";

import { Bell, BookOpen, Moon, Sun, Menu, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { setIsDarkMode } from "@/state";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
// import { Sheet } from "./ui/sheet";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NonDashboardMenuList from "./NonDashboardMenuList";

const NonDashboardNavbar = () => {
  const { user } = useUser();
  const userRole = user?.publicMetadata?.userType as "student" | "teacher";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container">
        <div className="nondashboard-navbar__search">
          <Link href="/" className="nondashboard-navbar__brand" scroll={false}>
            <Image
              src="/Ekaruz-Learning-logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <Link
                href="/search"
                className="bg-customgreys-secondarybg pl-10 sm:pl-14 pr-6 sm:pr-20 py-3 sm:py-4 rounded-xl text-gray-400  hover:text-white-50 hover:bg-customgreys-primarybg transition-all duration-300 text-sm sm:text-base"
                scroll={false}>
                <span className="hidden sm:inline ">Search Courses</span>
                <span className="sm:hidden">Search</span>
              </Link>
              <BookOpen
                className="nondashboard-navbar__search-icon"
                size={18}
              />
            </div>
          </div>
        </div>

        {!isMobile && <NonDashboardMenuList userRole={userRole} />}
      </div>
      {isMobile ? (
        <Sheet>
          <SheetTrigger>
            <Menu
              size={24}
              className="sm:block lg:hidden text-customgreys-dirtyGrey focus:outline-none"
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                <div>
                  <NonDashboardMenuList
                    userRole={userRole}
                    isMobileView={true}
                  />
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ) : null}
    </nav>
  );
};

export default NonDashboardNavbar;
