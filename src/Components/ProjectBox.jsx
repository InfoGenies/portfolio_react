import { FaLink } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function ProjectBox({ item }){
    return (
        <div className="rounded-lg  overflow-hidden hover:-translate-y-2.5  duration-3000 group">
            <div className="relative">
                <img
                    src={item.projectImage}
                    className="max-w-full w-[-webkit-fill-available] h-[170px] object-contain transition duration-300"
                    alt=""
                />

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
            </div>
            <div className="absolute opacity-0 group-hover:opacity-[1] transition-all duration-300 top-1/2 left-1/2 translate-x-[-50%] center mx-auto translate-y-[-50%] flex gap-2 items-center flex-wrap ">
                <a
                    target="_blank"
                    className=" bg-bgGradient relative -left-6 group-hover:left-0 transition-all duration-300 w-[45px] h-[45px] text-xl grid place-items-center text-white rounded-full"
                    href={item.linkProject}>
                    <FaLink />
                </a>
                <a
                    target="_blank"
                    className="bg-gradient-to-r relative left-6 group-hover:left-0 transition-all duration-300  from-cyan-500 to-blue-500 w-[45px] h-[45px]  text-xl grid place-items-center text-white rounded-full"
                    href={item.linkProjectGH}>
                    <FaCode />
                </a>
            </div>
            <div className="bg-[#c8c8c8] capitalize dark:bg-[#2E2E2E] p-2">
                <div className="flex items-center mb-3 flex-wrap justify-between">
                    <h2 className="text-lg ProName ">{item.name}</h2>
                    <div className="flex items-center gap-2 ">
                        {item.techImage.map((item, index) => {
                            return (
                                <img
                                    key={index}
                                    className="w-[25px]  h-[25px] grayscale group-hover:grayscale-0 object-contain bg-transparent"
                                    src={item}
                                />
                            );
                        })}
                    </div>
                </div>
                <p className="text-main font-bold text-center">
                    {item.tech == "JS" ? "Javascript" : item.tech}
                </p>
            </div>
        </div>
    );
};


