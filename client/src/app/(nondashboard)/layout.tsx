"use client";

import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Footer from "@/components/Footer";
import { useAppSelector } from "@/state/redux";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">{children}</main>
      <Footer />
    </div>
  );
}
