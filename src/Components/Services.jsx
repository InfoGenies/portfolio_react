import MainTitle from "./MainTitle";
import flutter from "../assets/flutter.svg";
import kotlin from "../assets/kotlin.svg";
import reactImg from "../assets/ReactIMG.png";

import js from "../assets/java.png";

import { motion } from "framer-motion";
export default function Services() {
  return (
    <div id="Services" className="my-[150px] relative">
      {/* circles to ui */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute w-[8px] blur-[4px] h-[8px] bg-bgGradient top-10 left-10 rounded-full "></motion.div>
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur-[5px] w-[10px] h-[10px]  bg-gradient-to-r from-violet-500 to-fuchsia-500 bottom-40 right-40 rounded-full "></motion.div>
      <motion.div
        animate={{
          x: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur-sm w-[10px] h-[10px] bg-green-600 bottom-0 left-2 rounded-full "></motion.div>
      <motion.div
        animate={{
          x: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur w-[15px] h-[15px] bg-violet-600 top-4 right-5 rounded-full "></motion.div>
      {/* end circles */}
      <MainTitle title={"My Services"} p={"This is what I can provide for you"} />
      <div className="container   grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <motion.div
          className="bg-[#b6b6b6]  dark:bg-[#2E2E2E] flex items-center justify-center px-[17px]   flex-col mx-auto text-center rounded-3xl w-[300px] h-[350px] relative before:w-[300px] before:absolute  before:h-[350px] before:bg-teal-800 before:rounded-3xl before:z-[-1] before:transition-all before:duration-300 cardAnimate  "
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              delay: 0.1,
            },
          }}>
          <div className="">
            <div className="flex items-center justify-center gap-3">
              <img
                className="rotate-[10deg]  w-[50px]"
                src={flutter}
                alt=""
              />
              <img className="-rotate-[10deg] w-[50px]" src={kotlin} alt="" />
            </div>
            <h2 className="font-bold mt-3 mb-4   text-3xl ">Flutter & Android</h2>
            <p className="text-gray-700 dark:text-gray-400 text-center text-lg">
            Developing and maintaining mobile apps using Flutter and Kotlin is a skill that I am proficient in.            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              delay: 0.3,
            },
          }}
          className="bg-bgGradient text-white  flex items-center justify-center px-[17px]   flex-col mx-auto text-center rounded-3xl w-[300px] h-[350px]   ">
          <div className="">
            <div className="flex items-center justify-center gap-3">
              <img className="rounded-xl w-[50px]" src={js} alt="" />
            </div>
            <h2 className="font-bold mt-3 mb-4 text-3xl text-white t ">
              Java Script
            </h2>
            <p className=" text-gray-100 text-center text-lg">
            My proficiency in JavaScript allows me to create interactive and dynamic web applications.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              delay: 0.5,
            },
          }}
          className="bg-[#b6b6b6] dark:bg-[#2E2E2E] flex items-center justify-center px-[17px]   flex-col mx-auto text-center rounded-3xl w-[300px] h-[350px] relative before:w-[300px] before:absolute  before:h-[350px] before:bg-teal-800 before:rounded-3xl before:z-[-1] before:transition-all before:duration-300 cardAnimate  ">
          <div className="">
            <div className="flex items-center justify-center gap-3 ">
              <img
                className="rotate-[18deg]   w-[50px]"
                src={reactImg}
                alt=""
              />
            </div>
            <h2 className="font-bold mt-3 mb-4   text-3xl ">React JS</h2>
            <p className="text-gray-700 dark:text-gray-400 text-center text-lg">
            Create a complex web app for your business using React Js
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

