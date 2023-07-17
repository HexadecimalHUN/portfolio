import React from "react";

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
        <div className="project-container p-1 flex flex-col mt-12">
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
            <div className="tech-stack">
                {techStack.map((tech, index) => (
                    <div key={index} className="card-tech font-bold text-sm text-slate-300">{tech}</div>
                ))}
            </div>
                
        </div>
    );
};

export default ProjectCard;