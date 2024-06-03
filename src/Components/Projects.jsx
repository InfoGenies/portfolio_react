import { useEffect, useState } from "react";
import MainTitle from "./MainTitle";
import axios from "axios";
import ProjectBox from "./ProjectBox";
import Lottie from "lottie-react";
import loading from "../../public/lotifie/loading-lotifie.json";

export default function Projects()  {
    const [activeBtn, setActiveBtn] = useState("All");
    const [projects, setProjects] = useState([]);
    const tabs = [
        { id: "Android", label: "Android", onClick: () => handleFilter("Android") },
        { id: "flutter", label: "Flutter", onClick: () => handleFilter("flutter") },
        { id: "React&Tailwind", label: "FrameWork", onClick: () => handleFilter("React&Tailwind") }
    ];

    const getAllProjects = async () => {
        setActiveBtn("All");
        await axios
            .get("https://cloudinary-demo.fly.dev/pf/project")
            .then((response) => {
                // Handle successful response
                setProjects(response.data.data.result);
            })
            .catch((error) => {
                // Handle error
                console.error("Error:", error);
            });
    }

    useEffect(() => {
        getAllProjects();
    }, []);


    const projectsMap = projects.map((item, i) => {
        return <ProjectBox key={i} item={item} />;
    });
    const handleFilter = async (e) => {

        await axios
            .get(`https://cloudinary-demo.fly.dev/pf/project?tech=${e}`)
            .then((response) => {
                // Handle successful response
                setProjects(response.data.data.result);
            })
            .catch((error) => {
                // Handle error
                console.error("Error:", error);
            });
        setActiveBtn(e);
    }
    return (
        <div className="py-[100px]" id="Projects">
            <MainTitle
                title={"Portfolio"}
                p={"Here you will see my projects ... Enjoy"}
            />

            <div className="container relative">
                <ul className="flex tabs items-center  w-fit mx-auto rounded-lg gap-y-2 gap-x-[1px] sm:gap-[1px] justify-center flex-wrap mb-10">

                    <li
                        id="All"
                        onClick={() => getAllProjects() }
                        className={`${activeBtn == "All" ? "activeTab" : ""
                            }   cursor-pointer hover:shadow-[0_0_40px_5px_rgba(255,68,0,0.292)] hover:text-white text-[1.2rem] sm:text-[1.4rem] transition-all duration-300 hover:bg-bgGradient flex items-center justify-center  w-[136px] h-[40px]  `}>
                        All
                    </li>
                    {tabs.map((tab) => (
                        <li
                            key={tab.id}
                            id={tab.id}
                            onClick={tab.onClick}
                            className={`skills ${activeBtn === tab.id ? "activeTab" : ""}`}
                        >
                            {tab.label}
                        </li>
                    ))}
                </ul>
                <div
                    className={`grid ${projects.length == 0
                        ? "grid-cols-1 place-items-center"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        }  `}>
                    {projects.length == 0 ? (
                        <div className="">
                            <Lottie className="w-[200px]" animationData={loading} />
                        </div>
                    ) : (
                        projectsMap
                    )}
                </div>
                
            </div>
        </div>
    );
};


