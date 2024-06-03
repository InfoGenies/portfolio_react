import img1 from "../assets/edu.png";
import img2 from "../assets/design-tool_2062942.png";
import img3 from "../assets/exp.png";
import img4 from "../assets/job.png";
import img5 from "../assets/ReactIMG.png";
import MainTitle from "./MainTitle";
import { motion } from "framer-motion";
export default function Journey() {
    return (
        <div className="my-[150px]">
            <MainTitle
                title={"My Journey"}
                p={"My programming journey from the beginning of college until now"}
            />
            {/* // we define an element called after with this props :
      // position: absolute with: 5px top:0px height:h-full let:[31px] 
      // when the mode is dark the bg:bg-[#2E2E2E] else the bg:bg-[#b6b6b6]
      // whileInView Purpose: Triggers animations when an element enters the viewport (visible area) during scrolling
      // animate : Directly animates an element based on its initial state and the provided animation properties
      */


            }

            <div className="mt-[50px] mx-auto md:m-0  relative after:absolute after:w-[5px] after:top-0 after:h-full dark:after:bg-[#2E2E2E]  after:bg-[#b6b6b6] after:left-[31px] md:after:left-1/2 after:ml-[-3px] after:z-[-1] ">
                <div className="container">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 60,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.3,
                                duration: 0.5,
                            },
                        }}
                        className="relative group leftContainer  pl-[80px] pr-[25px] md:px-[50px]  md:py-[10px] w-full md:w-1/2 mb-10 md:mb-0   ">
                        <img
                            className="absolute  border-[3px] border-[#969696] dark:border-[#484848] group-hover:scale-[1.2] group-hover:shadow-[0_0_40px_0_rgba(100,57,199,.2)] group-hover:border-[3px] group-hover:border-[#f4280dc5] transition-all duration-300 w-[50px] h-[50px] object-contain rounded-full left-[-25px] md:left-auto p-1  md:right-[-25px] top-[22px] z-10"
                            src={img1}
                            alt=""
                        />
                        <div className="px-[30px] transition-all duration-300 border-2 border-[#969696] dark:border-[#484848] group hover:border-2 dark:hover:border-[#f4280dc5] hover:border-[#f4280dc5] py-[20px] bg-[#b6b6b6] dark:bg-[#2E2E2E] rounded-lg text-[13px] md:text-[15px] left-0">
                            <h2 className="text-3xl">Education</h2>
                            <small className="inline-block mb-[15px] text-[15px] text-main font-bold">
                                2014 - 2019
                            </small>
                            <p className="text-gray-700 dark:text-gray-300">
                            I study in the Department of Information Systems at the Faculty  of Computers and Information Abdel Hamid Mehri (Constantine).
                            </p>
                            <span className="h-0 w-0  sm:group-hover:border-l-[#f4280dc5] dark:md:border-r-transparent group-hover:border-r-[#f4280dc5] sm:group-hover:border-r-transparent transition-all duration-300 absolute top-[35px] z-[1] border-[15px] border-transparent border-r-[#b6b6b6]  dark:border-r-[#2E2E2E] md:border-r-transparent  md:border-l-[#b6b6b6] md:dark:border-l-[#2E2E2E] left-[50.5px] md:left-auto md:right-[21px]"></span>
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
                                delay: 0.3,
                                duration: 0.5,
                            },
                        }}
                        className="relative group rightContainer pl-[80px] pr-[25px] md:px-[50px]  md:py-[10px] w-full md:w-1/2 mb-10  left-0 md:mb-0  md:left-1/2">
                        <img
                            className=" absolute p-1 border-[3px] border-[#969696] dark:border-[#484848]  group-hover:scale-[1.2] group-hover:shadow-[0_0_40px_0_rgba(100,57,199,.2)] group-hover:border-[3px] group-hover:border-[#f4280dc5] transition-all duration-300 w-[50px] h-[50px] object-contain  rounded-full left-[-25px] top-[22px] z-10"
                            src={img2}
                            alt=""
                        />
                        <div className="px-[30px] dark:hover:border-[#f4280dc5]  transition-all duration-300 border-2 border-[#969696] dark:border-[#484848] group hover:border-2 hover:border-[#f4280dc5] py-[20px] bg-[#b6b6b6] dark:bg-[#2E2E2E] rounded-lg text-[13px] md:text-[15px]">
                            <h2 className="text-[24px] sm:text-3xl">Responsive Design</h2>
                            <small className="inline-block text-[15px] mb-[15px] text-main font-bold">
                                Html-Css-Js
                            </small>
                            <p className="text-gray-700 dark:text-gray-300">
                            Through summer training and YouTube with the top programmers in the field, I was able to gain a strong understanding of Front End basics from college.
                            </p>
                            <span className="h-0 w-0 group-hover:border-r-[#f4280dc5] transition-all duration-300 absolute top-[35px] z-[1] border-[15px] border-transparent border-r-[#b6b6b6] dark:border-r-[#2E2E2E] left-[50.5px] md:left-[22px]"></span>
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
                                delay: 0.3,
                                duration: 0.5,
                            },
                        }}
                        className="relative group leftContainer  pl-[80px] pr-[25px] md:px-[50px]  md:py-[10px] w-full md:w-1/2 mb-10 md:mb-0   ">
                        <img
                            className="absolute  border-[3px] border-[#969696] dark:border-[#484848] group-hover:scale-[1.2] group-hover:shadow-[0_0_40px_0_rgba(100,57,199,.2)] group-hover:border-[3px] group-hover:border-[#f4280dc5] transition-all duration-300 w-[50px] h-[50px] object-contain rounded-full left-[-25px] md:left-auto p-1  md:right-[-25px] top-[22px] z-10"
                            src={img3}
                            alt=""
                        />
                        <div className="px-[30px] dark:hover:border-[#f4280dc5] transition-all duration-300 border-2 border-[#969696] dark:border-[#484848] group hover:border-2 hover:border-[#f4280dc5] py-[20px] bg-[#b6b6b6] dark:bg-[#2E2E2E] rounded-lg text-[13px] md:text-[15px] left-0">
                            <h2 className="text-3xl">Experience</h2>
                            <small className="inline-block text-[15px] mb-[15px] text-main font-bold">
                                +2 Years
                            </small>
                            <p className="text-gray-700 dark:text-gray-300">
                                My experience includes over a year in full-stack and mobile development and I have successfully completed large projects over the past years.
                            </p>
                            <span className="h-0 w-0  sm:group-hover:border-l-[#f4280dc5] dark:md:border-r-transparent group-hover:border-r-[#f4280dc5] sm:group-hover:border-r-transparent transition-all duration-300 absolute top-[35px] z-[1] border-[15px] border-transparent border-r-[#b6b6b6]  dark:border-r-[#2E2E2E] md:border-r-transparent  md:border-l-[#b6b6b6] md:dark:border-l-[#2E2E2E] left-[50.5px] md:left-auto md:right-[21px]"></span>
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
                                delay: 0.3,
                                duration: 0.5,
                            },
                        }}
                        className="relative group rightContainer pl-[80px] pr-[25px] md:px-[50px]  md:py-[10px] w-full md:w-1/2 mb-10  left-0 md:mb-0  md:left-1/2">
                        <img
                            className="absolute p-1 border-[3px] border-[#969696] dark:border-[#484848]  group-hover:scale-[1.2] group-hover:shadow-[0_0_40px_0_rgba(100,57,199,.2)] group-hover:border-[3px] group-hover:border-[#f4280dc5] transition-all duration-300 w-[50px] h-[50px] object-contain  rounded-full left-[-25px] top-[22px] z-10"
                            src={img4}
                            alt=""
                        />
                        <div className="px-[30px] dark:hover:border-[#f4280dc5] transition-all duration-300 border-2 border-[#969696] dark:border-[#484848] group hover:border-2 hover:border-[#f4280dc5] py-[20px] bg-[#b6b6b6] dark:bg-[#2E2E2E] rounded-lg text-[13px] md:text-[15px]">
                            <h2 className="text-3xl">The Job</h2>
                            <small className="inline-block text-[15px] mb-[15px] text-main font-bold">
                                Workplaces
                            </small>
                            <p className="text-gray-700 dark:text-gray-300">
                            
                                Since <span className=" font-mono text-orange-600 font-bold">
                                    {" "}
                                    2022
                                </span>, I have been a self-employed worker and have developed numerous mobile apps built using Flutter and Android,
                                 as well as full-stack web sites.
                            </p>
                            <span className="h-0 w-0 group-hover:border-r-[#f4280dc5] transition-all duration-300 absolute top-[35px] z-[1] border-[15px] border-transparent border-r-[#b6b6b6] dark:border-r-[#2E2E2E] left-[50.5px] md:left-[22px]"></span>
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
                                delay: 0.3,
                                duration: 0.5,
                            },
                        }}
                        className="relative group leftContainer  pl-[80px] pr-[25px] md:px-[50px]  md:py-[10px] w-full md:w-1/2 mb-10 md:mb-0   ">
                        <img
                            className="absolute  border-[3px] border-[#969696] dark:border-[#484848] group-hover:scale-[1.2] group-hover:shadow-[0_0_40px_0_rgba(100,57,199,.2)] group-hover:border-[3px] group-hover:border-[#f4280dc5] transition-all duration-300 w-[50px] h-[50px]  rounded-full left-[-25px] md:left-auto p-1  md:right-[-25px] top-[22px] z-10"
                            src={img5}
                            alt=""
                        />

                        <div className="px-[30px] dark:hover:border-[#f4280dc5] transition-all duration-300 border-2 border-[#969696] dark:border-[#484848] group hover:border-2 hover:border-[#f4280dc5] py-[20px] bg-[#b6b6b6] dark:bg-[#2E2E2E] rounded-lg text-[13px] md:text-[15px] left-0">
                            <h2 className="text-3xl">FrameWork</h2>
                            <small className=" inline-block mb-[15px] text-[15px] text-main font-bold">
                                React
                            </small>
                            <p className="text-gray-700 dark:text-gray-300">
                             ReactJS is my tool for building my front-end website,
                             and I also utilize NodeJS and ExpressJS for building my back-end.
                            </p>

                            <span className="h-0 w-0  sm:group-hover:border-l-[#f4280dc5] dark:md:border-r-transparent group-hover:border-r-[#f4280dc5] sm:group-hover:border-r-transparent transition-all duration-300 absolute top-[35px] z-[1] border-[15px] border-transparent border-r-[#b6b6b6]  dark:border-r-[#2E2E2E] md:border-r-transparent  md:border-l-[#b6b6b6] md:dark:border-l-[#2E2E2E] left-[50.5px] md:left-auto md:right-[21px]"></span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

;
