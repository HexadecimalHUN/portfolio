import React from "react";

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
        <div className="experience-container p-1">
            <div className="experience-card-header">
                <div className="experience-month text-base text-slate-500 font-extralight">{monthStart} - {monthEnd} {year}</div>
                <div className="experience-title text-lg text-slate-300 font-bold">{title} ·  {company}</div>
            </div>
            <div className="experience-desc text-sm text-slate-500">{description}</div>
            <div className="tech-stack">
                {techStack.map((tech, index) => (
                    <div key={index} className="card-tech font-bold text-sm text-slate-300">{tech}</div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;