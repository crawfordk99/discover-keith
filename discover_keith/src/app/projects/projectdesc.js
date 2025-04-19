import React from "react";
import { SiGithub } from "react-icons/si";


// If building a component, must use it similar to a lambda function 
// Don't use export default like you would with a page
// It might not be the best idea to make separate files for one component
// But I did this to get practice with importing/exporting, and using components
const ProjectDescription = ({title, description, link, skills}) => { 
    return (
        <div className = "p-2 max-w-sm mx-auto">
            <h1 className="font-bold p-1">{title}</h1> 
            <p className = "p-1">{description}</p>
            <a href = {link} className="pb-1"> <SiGithub/>  Project Link</a>
            <ul className="flex space-x-2">
            {skills.map((item, index) => (
                <li key={index} className="text-lg text-gray-700">
                {item}
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ProjectDescription;
