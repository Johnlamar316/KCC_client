"use client";

import { SignIn, useUser } from "@clerk/nextjs";
import React from "react";
import { dark } from "@clerk/themes";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const SignInComponent = () => {
  const { user } = useUser();
  const searchParams = useSearchParams();
  const isCheckoutPage = searchParams.get("showSignUp") !== null;
  const courseId = searchParams.get("id");

  const signUpUrl = isCheckoutPage
    ? `/checkout?step=1&id=${courseId}&showSignUp=true`
    : "/signup";

  const getRedirectUrl = () => {
    if (isCheckoutPage) {
      return `/checkout?step=2&id=${courseId}&showSignUp=true`;
    }

    return "/dashboard";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Link href="/" className="mb-4" scroll={false}>
        <Image
          src="/Ekaruz-Learning-logo2.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </Link>
      <SignIn
        appearance={{
          baseTheme: dark,
          elements: {
            rootBox: "flex justify-center items-center py-5",
            cardBox: "shadow-none",
            card: "bg-customgreys-secondarybg w-full shadow-none",
            footer: {
              background: "#0b1e3e",
              padding: "0rem 2.5rem",
              "& > div > div:nth-child(1)": {
                background: "#25262F",
              },
            },
            formFieldLabel: "text-white-50 font-normal",
            formButtonPrimary:
              "bg-customgreys-primarybg text-white-100 hover:bg-primary-600 !shadow-none",
            formFieldInput: "bg-slate-800 text-white-100 !shadow-none",
            footerActionLink:
              "text-customgreys-primarybg font-bold hover:text-primary-600",
          },
        }}
        signUpUrl={signUpUrl}
        forceRedirectUrl={getRedirectUrl()}
        routing="hash"
        afterSignOutUrl="/"
      />
    </div>
  );
};

export default SignInComponent;
