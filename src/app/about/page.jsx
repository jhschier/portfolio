"use client";
import Brain from "../../components/brain.jsx";
import ExperienceList from "../../components/experienceList.jsx";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(
    skillRef,
    { once: true },
    { margin: "-200px" },
  );

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text Container */}
        <div className="lg:xl:1/2 flex w-2/3 flex-col gap-24 sm:p-8 md:gap-32 md:p-12 lg:w-2/3 lg:gap-48 lg:p-20 lg:pr-0 xl:gap-64 xl:p-48">
          {/* Biography Container */}
          <div className="flex flex-col justify-center gap-12">
            {/* Biography title */}
            <h1 className="text-2xl font-bold">Biography</h1>
            {/* Biography description */}
            <p className="text-lg italic">
              Fullstack Developer with expertise in web technologies (HTML, CSS,
              JavaScript, TypeScript, React, Angular, NodeJS) and solid
              experience in Git/GitHub, Figma, Testing (Jest, Cypress), and
              databases (SQL, NoSQL). I highlight skills in communication,
              teamwork problem-solving, adopting agile methodologies like Scrum
              and Kanban.
            </p>
            {/* Biography quote */}
            <span className="font-semibold italic">
              Remember the two benefits of failure. First, if you do fail, you
              learn what doesn’t work; and second, the failure gives you the
              opportunity to try a new approach. – Roger Von Oech
            </span>
            {/* Biography signature */}
            <div className="self-end">
              <svg
                width="200"
                height="80"
                viewBox="0 0 417 285"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 140C62.1684 107.541 103.631 57.716 90.2222 5.11111C89.6207 2.75123 88.8961 -0.185041 87.1111 3.66667C77.6416 24.1008 73.9659 48.4543 69.3333 70.2222C59.3385 117.187 51.5088 164.622 48.1111 212.556C46.49 235.425 45.346 259.17 47.8889 282.056C48.6875 289.243 47.3983 267.594 46.7778 260.389C44.4635 233.517 39.4704 207.263 30.1111 181.889C23.7643 164.682 15.6977 148.005 5.44445 132.778C-1.27266 122.802 4.09312 132.435 6.66667 136.333C15.0004 148.956 24.6687 159.064 39.1111 164.722C52.8548 170.107 63.9967 171.471 78.9444 172.556C110.931 174.875 143.5 172.652 175.333 169.444C231.784 163.757 288.28 153.678 342 135.111C366.926 126.496 390.932 115.697 415 105"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M94 151C94 164.35 91 177.646 91 191"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M105 149C105 160.679 104 172.395 104 184"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M108 173C113.061 172.438 123 164.379 123 159C123 157.476 111.123 172.66 120.556 170.944C123.24 170.456 125.169 167.795 127.5 166.5C130.582 164.788 129.151 169.603 131.222 169.833C133.137 170.046 140.456 165.604 141 166.556C142.427 169.052 144.378 169 147 169"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M145 170C148.973 170 153 168.809 153 164C153 162.647 153.454 161 151.667 161C148.602 161 158.3 161.58 160.778 159.778C163.3 157.944 156.017 166.573 158.222 168.778C161.331 171.887 165.898 169.307 167 166"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M168 149C167.911 149.709 167.31 150.379 167 151"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M165 169C167.118 167.117 168 164.977 168 162"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M165 169C168.772 168.581 168 160.749 168 158"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M170 166C170.134 167.073 172.096 167.548 173 168"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M172 168C175.073 168 179.818 168.99 182.5 167.5C184.738 166.257 184.17 161.927 182 160.778C176.021 157.613 172 161.159 172 167"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M183 165C183 170.241 183 175.481 183 180.722C183 185.776 180.626 198.244 184 202.556C185.569 204.561 189.155 201.042 189.889 199.889C192.269 196.149 191.007 189.835 189 186.222C186.742 182.157 182.439 179.771 178.056 178.611C175.753 178.002 169.704 178.065 175.889 178C201.384 177.732 227.098 174.632 252.333 171.333C273.582 168.556 297.997 166.859 317 156"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M185 166C188.962 166 190.24 165.46 191.778 162C192.575 160.206 191 159.458 191 162C191 164.62 192.397 165.332 194.5 166.5C197.601 168.223 205.354 166.203 206.778 163C207.807 160.684 205 154.379 205 159.5C205 167.922 221.677 165.17 222 156.778C222.164 152.52 216 148.355 216 153.556C216 160.854 228.154 160.923 233 162"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            {/* Biography Scroll SVG */}

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={60}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Skills Container */}
          <div className="flex flex-col justify-center gap-12" ref={skillRef}>
            {/* Skill title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              Skills
            </motion.h1>
            {/* Skill List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex flex-wrap gap-4"
            >
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                React
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Angular
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                TailwindCss
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Styled-Components
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Azure DevOps
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* Skill Scroll SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <ExperienceList />
        </div>
        {/* SVG Container */}
        <div className="xl:1/2 sticky top-0 z-30 hidden w-1/3 lg:block">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
