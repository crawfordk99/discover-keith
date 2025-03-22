import { YouTubeEmbed } from "../components"; 
import ProjectDescription from "./projectdesc";

// An array with a nested to hold my projects info in
const projects = [
    {title : "Personal Stats Tracker App", description: "An app that helps keep track of your personal stats",
link: "https://www.github.com/crawfordk99/personal-stats-tracker", skills: ["Flutter", "Dart", "Firebase", "Mobile App Development", "Database Management"]},
    {title : "NLP in erlang", description: "Basic NLP functions built in erlang", link: "https://www.github.com/crawfordk99/nlp-in-erlang",
skills: ["erlang", "NLP", "Functional Programming"]}
]; 

export default function Projects() {
    return (
        <main>
            <section className = "max-w-sm mx-auto">
                {/* Leave the project description to a React component, and then call it */}
                <ProjectDescription 
                title = {projects[0].title}
                description = {projects[0].description}
                link = {projects[0].link}
                skills = {projects[0].skills}
                />
                <div>
                    <YouTubeEmbed videoId={"nc6d-AjsOgA"} />
                </div>
            </section>
            <section className = "max-w-sm mx-auto">
                {/* If you want to make HTML comments in Javascript, enclose
                with brackets. */}
                <ProjectDescription 
                title = {projects[1].title}
                description = {projects[1].description}
                link = {projects[1].link}
                skills = {projects[1].skills}
                />
                <div >
                    <YouTubeEmbed videoId={"WA78GYcscP8"}/>
                </div>
            </section>
        </main>
    );  
}