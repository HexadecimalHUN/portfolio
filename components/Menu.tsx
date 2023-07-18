import React from "react";

const Menu: React.FC = () => {

    return(
        <ul className="mt-10 text-slate-400">
            <li className="h-8"><a href="#intro" className="hover:text-slate-200 hover:text-xl hover:ease-in-out active:text-slate-200 active:text-slate-200 duration-200 hover:font-bold"> - Introduction</a></li>
            <li className="h-8"><a href="#experience" className="hover:text-slate-200 hover:text-xl active:text-slate-200 active:text-slate-200 duration-300 hover:font-bold">  - Experience</a></li>
            <li className="h-8"><a href="#project" className="hover:text-slate-200 hover:text-xl active:text-slate-200 active:text-slate-200 duration-200 hover:font-bold">  - Projects</a></li>
            <li className="h-8"><a href="#contact" className="hover:text-slate-200 hover:text-xl active:text-slate-200 active:text-slate-200 duration-200 hover:font-bold">  - Contact</a></li>
        </ul>
    )
};

export default Menu;