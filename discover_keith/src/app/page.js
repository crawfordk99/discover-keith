import Image from "next/image";
import { SiLinkedin, SiGithub } from "react-icons/si" // Import social media icons

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className = "flex flex-col gap-[32px] items-center">
        <Image
          className = "dark:invert"
          src = "/sawyer-bengtson.jpg"
          alt = "Chicago from the Millenium Bean"
          width = {250}
          height = {45}
        />
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className = "text-lg font-bold">Keith Crawford</h1>
        <div>
          <Image
            className = "mx-auto"
            src = "/me.jpeg"
            alt = "Me next to a US flag at the Chicago Planetarium"
            width = {150}
            height = {200}
          />
        </div>
        <div>
          <p>
            I'm a rising junior studying computer science with a minor in data science. While most
            of my classwork has been in C# and Python, I've been exploring lots of different languages.
            I'm currently working on a couple of app projects in Flutter/Dart. I'm most interested in 
            data engineering, backends services, and database management. 
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/kcjr3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin/>
          My LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.github.com/crawfordk99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub/>
          Go to My Github →
        </a>
      </footer>
    </div>
  );
}
