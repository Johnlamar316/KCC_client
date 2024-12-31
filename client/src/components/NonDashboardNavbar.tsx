"use client";

import { Bell, BookOpen, Moon, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { setIsDarkMode } from "@/state";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const NonDashboardNavbar = () => {
  const { user } = useUser();
  const userRole = user?.publicMetadata?.userType as "student" | "teacher";

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
                className="nondashboard-navbar__search-input"
                scroll={false}>
                <span className="hidden sm:inline">Search Courses</span>
                <span className="sm:hidden">Search</span>
              </Link>
              <BookOpen
                className="nondashboard-navbar__search-icon"
                size={18}
              />
            </div>
          </div>
        </div>
        <div className="nondashboard-navbar__actions">
          {/* Icons */}
          <div className="flex items-center">
            <button
              onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
              className={isDarkMode ? `rounded p-2` : `rounded p-2`}>
              {isDarkMode ? (
                <Sun className="h-6 w-6 cursor-pointer dark:text-white" />
              ) : (
                <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
              )}
            </button>
            <button className="nondashboard-navbar__notification-button">
              <span className="nondashboard-navbar__notification-indicator"></span>
              <Bell className="nondashboard-navbar__notification-icon" />
            </button>
          </div>
          <SignedIn>
            <UserButton
              appearance={{
                // baseTheme: isDarkMode ? dark : undefined,
                elements: {
                  userButtonOuterIdentifier: "text-customgreys-dirtyGrey",
                  userButtonBox: "scale-90 sm:scale-100",
                },
              }}
              showName={true}
              userProfileMode="navigation"
              userProfileUrl={
                userRole === "teacher" ? "/teacher/profile" : "/user/profile"
              }
            />
          </SignedIn>
          <SignedOut>
            <Link
              href="/signin"
              className="nondashboard-navbar__auth-button--login"
              scroll={false}>
              Log in
            </Link>
            <Link
              href="/signup"
              className="nondashboard-navbar__auth-button--signup"
              scroll={false}>
              Sign up
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default NonDashboardNavbar;
