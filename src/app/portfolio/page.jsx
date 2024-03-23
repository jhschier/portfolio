"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import ContactMe from "../components/contactMe.jsx";

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const projectList = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "JoJo's Burger",
      desc: "JoJo's Burger is a full-stack fast-food ordering system developed using React.js and Node.js. It offers user authentication for secure account creation and login. Users can browse the menu, add items to their cart, and place orders. Admins have access to a dashboard to manage orders and products.",
      img: "/jojosburger.png",
      link: "https://jojos-burger-front.vercel.app/login",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Rick and Morty's Infinite Wiki",
      desc: "Explore the Rick and Morty universe effortlessly with this React-powered wiki. Discover characters, locations, and episodes, enhanced with Bootstrap styling and Sass. Effortless navigation, dynamic filters, and a sleek design make this wiki your go-to source for all things Rick and Morty.",
      img: "/rickymorty.png",
      link: "https://r-m-infinite-wiki.vercel.app",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Project Currency",
      desc: "A web-based application crafted with HTML, CSS, and JavaScript, enabling users to effortlessly convert between various currencies, including Dollar, Real, Euro, Pound, Bitcoin, and Ethereum. Static currency values as of 17/09/2023 provide accurate conversion results.",
      img: "/currencyconvert.png",
      link: "https://jhschier.github.io/ProjectCurrencyConvert/",
    },
    {
      id: 4,
      color: "from-purple-300 to-orange-300",
      title: "Project Weather",
      desc: "A dynamic weather page that changes its background on every reload or entry. It utilizes the OpenWeatherMap API for weather data and includes a search bar and button to fetch weather information for cities.",
      img: "/currentWeather.png",
      link: "https://jhschier.github.io/Project-Weather/",
    },
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="relative h-[600vh]" ref={ref}>
        <div className="flex h-[calc(100vh-6rem)] w-screen items-center justify-center text-center text-8xl">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen items-center gap-4 overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-purple-800 to-red-300" />
            {projectList.map((item) => (
              <div
                key={item.id}
                className={`flex h-screen w-screen items-center justify-center bg-gradient-to-r ${item.color}`}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="w-90 relative h-56  md:h-64 md:w-96 lg:h-[350px] lg:w-[500px] xl:h-[500px] xl:w-[1000px]">
                    <Image className="rounded-xl" src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link className="flex justify-end" href={item.link}>
                    <button className="md:text-md m-4 rounded bg-white p-2 text-sm font-semibold text-gray-600 md:p-4 lg:p-8 lg:text-lg">
                      Check Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <ContactMe />
    </motion.div>
  );
};

export default PortfolioPage;
