import { motion } from "framer-motion";
import Link from "next/link";

const ContactMe = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-16 text-center">
      <h1 className="text-8xl">Do you have a project?</h1>
      <div className="relative">
        <motion.svg
          animate={{ rotate: -360 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          viewBox="0 0 300 300"
          className="h-64 w-64 md:h-[500px] md:w-[500px] "
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <text fill="#000">
            <textPath xlinkHref="#circlePath" className="text-xl">
              Front-end Developer and UI Designer
            </textPath>
          </text>
        </motion.svg>
        <Link
          href="/contact"
          className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white md:h-28 md:w-28"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default ContactMe;
