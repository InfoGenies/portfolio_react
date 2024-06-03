import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import axios from "axios";
import { useEffect, useState } from "react";

import animation from "../../public/lotifie/Animation - footer.json";
const Footer = () => {
    let links = [
        { id: 1, href: "#Hero", name: "Home" },
        { id: 2, href: "#About", name: "About" },
        { id: 3, href: "#Services", name: "Services" },
        { id: 4, href: "#Projects", name: "Portfolio" },
    ];

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
        <>
            <footer className="mt-[100px] dark:bg-[#1d1d1d] bg-[#e5e5e5] py-[50px]">
                <div className="container grid grid-cols-1 place-items-center text-center md:text-start  md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
                    <div className="flex flex-col gap-4 md:gap-2">
                        <h2 className="text-[50px] font-bold">Zakaria</h2>
                        <div className="flex items-center justify-center md:justify-start gap-2">
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
                                className=" w-[40px] h-[40px] rounded-lg bg-[#c9c9c9] dark:bg-[#2E2E2E] text-gray-600 dark:text-white hover:text-white  grid place-items-center transition-all duration-300 cursor-pointer dark:hover:bg-[#6e5494] hover:bg-[#6e5494] ">
                                <FaGithub size={20} />
                            </motion.a>
                            <motion.a
                                target="_blank"
                                href="https://wa.me/+2001156581025"
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        delay: 0.4,
                                    },
                                }}
                                className="w-[40px] h-[40px] rounded-lg bg-[#c9c9c9] dark:bg-[#2E2E2E] text-gray-600 dark:text-white hover:text-white  grid place-items-center transition-all duration-300 cursor-pointer hover:bg-[#25d366] dark:hover:bg-[#25d366]">
                                <FaWhatsapp size={20} />
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
                                className="w-[40px] h-[40px] rounded-lg bg-[#c9c9c9] dark:bg-[#2E2E2E] text-gray-600 dark:text-white hover:text-white  grid place-items-center transition-all duration-300 cursor-pointer dark:hover:bg-[#0a66c2] hover:bg-[#0a66c2]">
                                <FaLinkedinIn size={20} />
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
                                className="w-[40px] h-[40px] rounded-lg bg-[#c9c9c9] dark:bg-[#2E2E2E] text-gray-600 dark:text-white hover:text-white  grid place-items-center transition-all duration-300 cursor-pointer dark:hover:bg-[#1877f2] hover:bg-[#1877f2]">
                                <RiFacebookFill size={20} />
                            </motion.a>
                        </div>
                        
                    </div>
                    <ul className="flex flex-col   gap-2  w-full ">
                        {links.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className="border-b border-[#393939] text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:pl-[10px] transition-all duration-300 w-full ">
                                    <a
                                        className="text-lg flex items-center justify-center md:justify-start gap-2 mb-3 "
                                        href={item.href}>
                                        <MdKeyboardDoubleArrowRight
                                            size={22}
                                            className="text-orange-600 font-bold"
                                        />
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center md:flex-row flex-col gap-2 md:gap-4">
                            <MdPlace className="text-orange-600 text-[30px] lg:text-[50px]  " />
                            <p className="text-gray-500 dark:text-gray-400 ">
                                Algeria, Constantine,  Street Daksi 128 logts B01 N25
                            </p>
                        </div>
                        <div className="flex items-center md:flex-row flex-col gap-2 md:gap-4">
                            <MdBusiness size={30} className="text-orange-600  " />
                            <p className="text-gray-500 dark:text-gray-400 ">
                                Business Hours: From <br className="hidden md:block" /> 8:00 am
                                To 17:00 pm
                            </p>
                        </div>
                        <div className="flex items-center md:flex-row flex-col gap-2 md:gap-4">
                            <FaPhoneAlt size={30} className="text-orange-600  " />
                            <ul>
                                <li className="text-gray-500 dark:text-gray-400">
                                    +2130557624123
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                     +2130557624123
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full">
                        <Lottie
                            className="w-1/2  mx-auto md:w-full "
                            animationData={animation}
                        />
                    </div>
                </div>
            </footer>
            <p className="border-t border-[#ccc] dark:border-[#393939] font-bold text-[20px] dark:bg-[#1d1d1d] bg-[#e5e5e5] py-[25px] text-center">
                Made With 🧡 By Zakaria
            </p>
        </>
    );
};

export default Footer;
