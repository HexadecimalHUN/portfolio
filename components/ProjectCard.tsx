import React from "react";
import { motion } from "framer-motion";

type Props = {
    yearStart:number;
    yearEnd:number;
    title:string;
    description:string;
    picture:string;
    techStack:string[];
};

const ProjectCard: React.FC<Props> = ({yearStart, yearEnd, title, description, picture, techStack}) => {
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.1, ease: "easeInOut" }}
            className="project-container p-1 flex flex-col mt-12" id = "project">
            <div className="project-card-header flex flex-row justify-between">
                <div className="project-year text-base text-slate-500 font-extralight">{yearStart} - {yearEnd}</div>
                <div className="project-title text-lg text-slate-300 font-bold italic">· {title}</div>
            </div>
            <div className="project-body flex flex-row">
                <div className="project-pic flex min-w-20 items-center" style={{flexShrink:0}}>
                    <img src={picture} alt="No picture" style={{ width: '5rem', height: '5rem'}}/>
                </div>
                <div className="project-desc text-sm text-slate-500 flex flex-wrap w-auto ml-10">{description}</div>
            </div>
            <div className="flex flex-row gap-2 pl-2 pr-2 flex-wrap mt-2 mb-2">
                {techStack.map((tech, index) => (
                    <div key={index} className="font-bold text-sm text-slate-300 border-2 border-solid border-slate-200 rounded-md pl-2 pr-2 shadow-lg shadow-slate-700/80 bg-gradient-to-r from-cyan-800 to-blue-900 flex-wrap">{tech}</div>
                ))}
            </div>
                
        </motion.div>
    );
};

export default ProjectCard;