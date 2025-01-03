"use client";

import Header from "@/components/Header";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

const Dashboard = () => {
  const { user, isLoaded } = useUser();
  const fullName = user?.fullName ?? "User";

  console.log("fullName", fullName);

  return (
    <>
      <Header title="Dashboard" subtitle="View your Dashboard" />
      <div className="min-h-screen">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-8 bg-customgreys-secondarybg p-10 rounded">
          <div className="flex-1 text-center sm:text-left mb-6 sm:mb-0">
            <h1 className="text-2xl font-bold text-customgreys-primarybg">
              <span className="text-white-50">Welcome back, </span>
              {fullName}
            </h1>
            <p className="text-gray-200 mt-2">
              A new and exciting course has just become available! This is an
              incredible <br />
              opportunity to expand your skills, learn valuable insights, and
              stay ahead.
            </p>
            <Link href="/search" passHref>
              <button className="mt-6 px-6 py-2 bg-customgreys-primarybg text-white-50 font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105">
                Go to Course
              </button>
            </Link>
          </div>
          <div className="ml-auto">
            <Image
              src="/forDashboard.png"
              alt="Dashboard Image"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cards Section */}
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h2 className="text-xl font-semibold text-gray-700">Courses</h2>
            <p className="text-2xl font-bold text-blue-600">12</p>
            <p className="text-gray-500">Ongoing</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h2 className="text-xl font-semibold text-gray-700">Completed</h2>
            <p className="text-2xl font-bold text-green-600">8</p>
            <p className="text-gray-500">Courses</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h2 className="text-xl font-semibold text-gray-700">Messages</h2>
            <p className="text-2xl font-bold text-purple-600">23</p>
            <p className="text-gray-500">Unread</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h2 className="text-xl font-semibold text-gray-700">Rewards</h2>
            <p className="text-2xl font-bold text-yellow-600">5</p>
            <p className="text-gray-500">Badges</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <ul className="divide-y divide-gray-200">
              <li className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Completed "React Basics"
                  </h3>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
                <span className="text-green-500 font-bold">+10 XP</span>
              </li>
              <li className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Joined "Advanced JavaScript"
                  </h3>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
                <span className="text-blue-500 font-bold">New Course</span>
              </li>
              <li className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Earned "JavaScript Master" Badge
                  </h3>
                  <p className="text-sm text-gray-500">3 days ago</p>
                </div>
                <span className="text-yellow-500 font-bold">Achievement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
