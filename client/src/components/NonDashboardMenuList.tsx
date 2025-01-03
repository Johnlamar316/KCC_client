import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

interface NonDashboardMenuListProps {
  userRole: "student" | "teacher";
  isMobileView?: boolean;
}

const NonDashboardMenuList = ({
  userRole,
  isMobileView,
}: NonDashboardMenuListProps) => {
  return (
    <div
      className={
        isMobileView
          ? "nondashboard-navbar__actions_mobile"
          : "nondashboard-navbar__actions"
      }
      suppressHydrationWarning>
      <SignedIn>
        <UserButton
          appearance={{
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
        <Link className="nondashboard-navbar__tops " href="/" scroll={false}>
          Home
        </Link>
        <Link
          className="nondashboard-navbar__tops"
          href="/about"
          scroll={false}>
          About
        </Link>
        <Link
          className="nondashboard-navbar__tops"
          href="/search"
          scroll={false}>
          Courses
        </Link>
        <Link
          className="nondashboard-navbar__tops"
          href="/contact"
          scroll={false}>
          Contact
        </Link>
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
          Enroll Now
        </Link>
      </SignedOut>
    </div>
  );
};

export default NonDashboardMenuList;
