"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { useCarousel } from "@/hooks/useCarousel";
import { useGetCoursesQuery } from "@/state/api";
import CourseCardSearch from "@/components/CourseCardSearch";
import { useRouter } from "next/navigation";
import { subscriptionData, testemonials } from "@/lib/mockData";
import SubscriptionCard from "@/components/SubscriptionCard";

const LoadingSkeleton = () => {
  return (
    <div className="landing-skeleton">
      <div className="landing-skeleton__hero">
        <div className="landing-skeleton__hero-content">
          <Skeleton className="landing-skeleton__title" />
          <Skeleton className="landing-skeleton__subtitle" />
          <Skeleton className="landing-skeleton__subtitle-secondary" />
          <Skeleton className="landing-skeleton__button" />
        </div>
        <Skeleton className="landing-skeleton__hero-image" />
      </div>

      <div className="landing-skeleton__featured">
        <Skeleton className="landing-skeleton__featured-title" />
        <Skeleton className="landing-skeleton__featured-description" />

        <div className="landing-skeleton__tags">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Skeleton key={index} className="landing-skeleton__tag" />
          ))}
        </div>

        <div className="landing-skeleton__courses">
          {[1, 2, 3, 4].map((_, index) => (
            <Skeleton key={index} className="landing-skeleton__course-card" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  const router = useRouter();
  const currentImage = useCarousel({ totalImages: 3 });
  const { data: courses, isLoading, isError } = useGetCoursesQuery({});
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleToggleCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  const displayedCourses = showAllCourses ? courses : courses?.slice(0, 4);

  if (isLoading) return <LoadingSkeleton />;

  const handleCourseClick = (courseId: string) => {
    router.push(`/search?id=${courseId}`, {
      scroll: false,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="landing"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-[80vh] flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-1"
      >
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Coding Courses for Kids and Teens
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Children are great imitators. So give them something great to
            imitate.
          </p>
          <div className="flex">
            <button
              onClick={() => router.push("/signup")}
              className="mt-6 px-6 py-3 text-white-50 font-semibold rounded-lg shadow-lg mr-4 uppercase bg-secondary-mainground hover:bg-customgreys-secondarybg transition-all duration-300"
            >
              Enroll Now
            </button>

            <button className="mt-6 px-6 py-3 text-white font-semibold rounded-lg shadow-lg border-2 border-fuchsia-700 hover:bg-fuchsia-800 hover:text-white-50 transition-all duration-300 uppercase text-fuchsia-700 flex items-center group">
              <Play className="w-5 h-5 text-fuchsia-700 group-hover:text-white-50 transition-all duration-300" />
              <span className="ml-2">Watch Now</span>
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/rb_28276.png"
            alt="Coding Illustration"
            className="w-full"
            width={1000}
            height={1000}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing__hero mb-40"
      >
        <div className="landing__hero-content">
          <h1 className="landing__title">Courses</h1>
          <p className="landing__description">
            This is the list of the courses you can enroll in.
            <br />
            Courses when you need them and want them.
          </p>
          <div className="landing__cta">
            <Link href="/search" scroll={false}>
              <div className="landing__cta-button">Search for Courses</div>
            </Link>
          </div>
        </div>
        <div className="landing__hero-images">
          {["/heroMain.jpg", "/heroMain2.jpg", "/heroMain3.jpg"].map(
            (src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Hero Banner ${index + 1}`}
                priority={index === currentImage}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`landing__hero-image ${
                  index === currentImage ? "landing__hero-image--active" : ""
                }`}
              />
            )
          )}
        </div>
      </motion.div>

      {displayedCourses ? (
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Courses</h2>
          <div className="landing__courses">
            {displayedCourses &&
              displayedCourses.map((course, index) => (
                <motion.div
                  key={course.courseId}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ amount: 0.4 }}
                >
                  <CourseCardSearch
                    course={course}
                    onClick={() => handleCourseClick(course.courseId)}
                  />
                </motion.div>
              ))}
          </div>
          <div
            className="text-customgrey-secondarybg mt-4 cursor-pointer"
            onClick={handleToggleCourses}
          >
            {showAllCourses ? "Show less" : "Show all courses"}
          </div>
        </div>
      ) : <div className="mb-20">No Course Available</div>}

      <div className="py-12 mt-10 mb-20">
        <h2 className="text-2xl font-semibold mb-6">Your Subscription Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {subscriptionData.map((sub, index) => (
            <motion.div
              key={sub.subscriptionId}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ amount: 0.4 }}
            >
              <SubscriptionCard key={sub.subscriptionId} {...sub} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="landing__featured-title">Featured Courses</h2>
        <p className="landing__featured-description">
          From beginner to advanced, in all industries, we have the right
          courses just for you and preparing your entire journey <br /> for
          learning and making the most.
        </p>

        <motion.div
          className="landing__tags"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.4 }}
        >
          {[
            "web development",
            "IT",
            "html",
            "css",
            "python",
            "javascript",
            "Scratch",
            "code combat",
            "roblox studio",
          ].map((tag, index) => (
            <span key={index} className="landing__tag text-white-50">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="py-12">
        <h2 className="text-2xl font-semibold mb-4">What Our Students Say</h2>
        <p className="text-customgreys-dirtyGrey mb-6">
          Hear from the students who have transformed their learning journey
          with our courses—and their parents <br /> who saw the change
          firsthand.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testemonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-white border-t-4 border-customgreys-primarybg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ amount: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;
