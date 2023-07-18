import React from "react";
import { motion } from "framer-motion";

type Props = {
    monthStart:string;
    monthEnd:string;
    year:number;
    title:string;
    description:string;
    company:string;
    techStack:string[];
}

const ExperienceCard: React.FC<Props> = ({monthStart,monthEnd, year, title, description, company, techStack}) => {
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            id = "experience" className="experience-container p-1 flex flex-col">
            <div className="flex justify-between flex-row">
                <div className="experience-month text-base text-slate-500 font-extralight">{monthStart} - {monthEnd} {year}</div>
                <div className="experience-title text-lg text-slate-300 font-bold">{title} ·  {company}</div>
            </div>
            <div className="experience-desc text-sm text-slate-500">{description}</div>
            <div className="flex flex-row gap-2 pl-2 pr-2 flex-wrap mt-2 mb-2">
                {techStack.map((tech, index) => (
                    <div key={index} className="font-bold text-sm text-slate-300 border-2 border-solid border-slate-200 rounded-md pl-2 pr-2 shadow-lg shadow-slate-700/80 bg-gradient-to-r from-cyan-800 to-blue-900 flex-wrap">{tech}</div>
                ))}
            </div>
        </motion.div>
    );
};

export default ExperienceCard;