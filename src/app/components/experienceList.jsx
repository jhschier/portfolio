import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const ExperienceList = () => {
  const experienceRef = useRef();

  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <div
      className="flex flex-col justify-center gap-12 pb-48"
      ref={experienceRef}
    >
      {/* EXPERIENCE TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold"
      >
        EXPERIENCE
      </motion.h1>
      {/* EXPERIENCE LIST */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        className="w-screen sm:w-1/2 "
      >
        {/* EXPERIENCE LIST ITEM */}
        <div className="flex h-48 justify-between">
          {/* LEFT */}
          <div className="w-1/3 ">
            {/* JOB TITLE */}
            <div className="rounded-b-lg rounded-s-lg bg-white p-3 font-semibold">
              FullStack Developer
            </div>
            {/* JOB DESC */}
            <div className="p-3 text-sm italic">
              Creating landing pages and microservices to clients based on their
              needs.{" "}
            </div>
            {/* JOB DATE */}
            <div className="p-3 text-sm font-semibold text-red-400">
              2024 - Present
            </div>
            {/* JOB COMPANY */}
            <div className="w-fit rounded bg-white p-1 text-sm font-semibold">
              NossaCrio
            </div>
          </div>
          {/* CENTER */}
          <div className="flex w-1/6 justify-center">
            {/* LINE */}
            <div className="relative h-full w-1 rounded bg-gray-600">
              {/* LINE CIRCLE */}
              <div className="absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-red-400"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3 "></div>
        </div>
        {/* EXPERIENCE LIST ITEM */}
        <div className="flex h-48 justify-between">
          {/* LEFT */}
          <div className="w-1/3 "></div>
          {/* CENTER */}
          <div className="flex w-1/6 justify-center">
            {/* LINE */}
            <div className="relative h-full w-1 rounded bg-gray-600">
              {/* LINE CIRCLE */}
              <div className="absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-red-400"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3 ">
            {/* JOB TITLE */}
            <div className="rounded-b-lg rounded-s-lg bg-white p-3 font-semibold">
              Angular Developer
            </div>
            {/* JOB DESC */}
            <div className="p-3 text-sm italic">
              Addressed issues in a project involving resolving constructor
              implementation errors and ensuring proper communication between
              components and services.
            </div>
            {/* JOB DATE */}
            <div className="p-3 text-sm font-semibold text-red-400">
              2024 - 2024{" "}
            </div>
            {/* JOB COMPANY */}
            <div className="w-fit rounded bg-white p-1 text-sm font-semibold">
              Quay Solutions
            </div>
          </div>
        </div>
        {/* EXPERIENCE LIST ITEM */}
        <div className="flex h-48 justify-between">
          {/* LEFT */}
          <div className="w-1/3 ">
            {/* JOB TITLE */}
            <div className="rounded-b-lg rounded-s-lg bg-white p-3 font-semibold">
              FullStack Developer
            </div>
            {/* JOB DESC */}
            <div className="p-3 text-sm italic">
              Responsible for creating web apps and services, using JS, TS,
              Node.js, React, Angular and other tools.
            </div>
            {/* JOB DATE */}
            <div className="p-3 text-sm font-semibold text-red-400">
              2023 - Present
            </div>
            {/* JOB COMPANY */}
            <div className="w-fit rounded bg-white p-1 text-sm font-semibold">
              Freelance
            </div>
          </div>
          {/* CENTER */}
          <div className="flex w-1/6 justify-center">
            {/* LINE */}
            <div className="relative h-full w-1 rounded bg-gray-600">
              {/* LINE CIRCLE */}
              <div className="absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-red-400"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3 "></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceList;
