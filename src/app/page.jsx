"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex h-full flex-col overflow-scroll px-4 sm:h-full sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        {/* Image Container */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2 ">
          <Image
            src="/port.svg"
            alt=""
            fill
            className=" max-w-[100%] object-contain sm:max-w-[90%]"
          />
        </div>

        {/* Text Container */}
        <div className="mt-20 flex h-1/2 flex-col items-center justify-center gap-8 lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-center text-4xl font-bold md:text-6xl ">
            Crafting Digital Experiences, Designing the tomorrow.
          </h1>

          {/* DESCRIPTION */}
          <p className="text-center md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="flex w-full justify-center gap-4 pb-5 sm:mb-0 sm:w-1/2">
            <Link
              href={"/portfolio"}
              className="rounded-lg bg-black p-4 text-white ring-1 ring-black "
            >
              View my work
            </Link>
            <Link
              href={"/contact"}
              className="rounded-lg p-4 ring-1 ring-black"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      ;
    </motion.div>
  );
};

export default Homepage;
