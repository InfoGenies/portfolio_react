import MainTitle from "./MainTitle";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import axios from "axios";
import { useEffect, useState } from "react";


import Lottie from "lottie-react";
import done from "../../public/lotifie/lottie.json";
export default function Contact() {


    const [state, handleSubmit] = useForm("mrgnerga");
    const [data, setData] = useState([]);


    const getData = async () => {
        await axios
            .get("https://cloudinary-demo.fly.dev/pf/social")
            .then((response) => {
                // Handle successful response
                setData(response.data.data.result);
            })
            .catch((error) => {
                // Handle error
                console.error("Error:", error);
            });
    }

    useEffect(() => {
        getData();
    }, []);



    return (
        <div className="my-[150px] relative" id="contact">
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
                className="absolute w-[22px] blur-md h-[22px] bg-bgGradient top-10 left-10 rounded-full "></motion.div>
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className="absolute blur-[5px] w-[14px] h-[14px]  bg-gradient-to-r from-violet-500 to-fuchsia-500 bottom-40 right-40 rounded-full "></motion.div>
            <motion.div
                animate={{
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className="absolute blur-sm w-[16px] h-[16px] bg-green-600 bottom-[-50px] md:bottom-0 left-2 rounded-full "></motion.div>
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
            <MainTitle title={"Contact"} p={"Let’s Work Together"} />
            <div className="container">
                <div className="flex-col relative  sm:flex sm:flex-row  gap-10 justify-center ">
                    <div className="flex items-center sm:flex-col justify-center gap-5 sm:gap-[25px] flex-wrap">
                        <motion.a
                            target="_blank"
                            href={(data.length == 0 ? "" : data[1].link)}
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    delay: 0.2,
                                },
                            }}
                            className=" w-[60px] h-[60px] rounded-2xl text-gray-600 dark:text-white  bg-[#b6b6b6] dark:bg-[#2E2E2E]   dark:hover grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#6e5494] dark:hover:bg-[#6e5494] ">
                            <FaGithub size={30} />
                        </motion.a>
                        <motion.a
                            target="_blank"
                            href="https://wa.me/+2130557624123"
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    delay: 0.4,
                                },
                            }}
                            className=" w-[60px] h-[60px] rounded-2xl text-gray-600 dark:text-white  bg-[#b6b6b6] dark:bg-[#2E2E2E]   dark:hover grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#25d366] dark:hover:bg-[#25d366]">
                            <FaWhatsapp size={30} />
                        </motion.a>
                        <motion.a
                            href={(data.length == 0 ? "" : data[3].link)}
                            target="_blank"
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    delay: 0.6,
                                },
                            }}
                            className=" w-[60px] h-[60px] rounded-2xl text-gray-600  dark:text-white bg-[#b6b6b6] dark:bg-[#2E2E2E]   dark:hover grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#0a66c2] dark:hover:bg-[#0a66c2]">
                            <FaLinkedinIn size={30} />
                        </motion.a>
                        <motion.a
                            href={(data.length == 0 ? "" : data[0].link)}
                            target="_blank"
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    delay: 0.8,
                                },
                            }}
                            className=" w-[60px] h-[60px] rounded-2xl text-gray-600 dark:text-white  bg-[#b6b6b6] dark:bg-[#2E2E2E]   dark:hover grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#1877f2] dark:hover:bg-[#1877f2]">
                            <RiFacebookFill size={30} />
                        </motion.a>
                        <motion.a
                            href={(data.length == 0 ? "" : data[2].link)}
                            target="_blank"
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    delay: 1,
                                },
                            }}
                            className=" w-[60px] h-[60px] rounded-2xl text-gray-600 dark:text-white  bg-[#b6b6b6] dark:bg-[#2E2E2E]   dark:hover grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#fe3e78] dark:hover:bg-[#fe3e78]">
                            <FaInstagram size={30} />
                        </motion.a>
                    </div>
                    <iframe
                        title="map"
                        className="w-full sm:w-[650px] mt-10 sm:mt-0 row-end-2   "
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=36.356896,+6.638816&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                </div>
            </div>
        </div>
    );
};




