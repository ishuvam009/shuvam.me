import { Header } from "../components/Header";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { ProjectComp } from "../components/ProjectComp";
import GitHubCalendar from "react-github-calendar";

export const Landing = () => {
  return (
    <>
      <div className="mx-60 mt-16 font-mono h-screen">
        <Header />
        {/* //About Section */}
        <div className="mt-20 mx-10">
          <p className="text-2xl font-semibold mb-6">Hey there !</p>
          <p>
            Aspiring software developer with hands-on experience in full-stack
            web development, specializing in React.js, Node.js, Express.js, and
            database management. Passionate about building scalable, secure, and
            user-friendly web applications. Proficient in frontend technologies
            (React, Tailwind CSS) and backend development (
            <span className="text-[#d8bd64]">
              Node.js, Express.js, Hono, FastAPI, MongoDB, PostgreSQL
            </span>
            ). Experienced in <span className="text-[#d8bd64]">DevOps</span>{" "}
            applications like{" "}
            <span className="text-[#d8bd64]">
              Docker, NGINX, Redis, Cloudflare
            </span>{" "}
            and <span className="text-[#d8bd64]">AWS</span>. Seeking an{" "}
            <span className="text-[#d8bd64]">Intern/SDE 1</span> role to
            contribute to innovative projects and grow as a full-stack or
            backend developer.
          </p>
          <div className="mt-6 flex items-center gap-x-4">
            <p className="font-bold underline underline-offset-4">
              Find me on -{" "}
            </p>
            <a
              href="https://github.com/ishuvam009"
              target="_blank"
              aria-label="Visit my github page."
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/shuvam-mandal-174221315/"
              target="_blank"
              aria-label="Visit my Linkedin profile"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://x.com/Lightninggg007"
              target="_blank"
              aria-label="Visit my twitter profile"
            >
              <FaSquareXTwitter className="text-2xl" />
            </a>
          </div>
        </div>
        {/* //Github Contribution Calander */}
        <div className="mx-10 my-15">
          <p className="my-6 font-bold">Github Contribution</p>
          <GitHubCalendar username="ishuvam009" />
        </div>
        {/* //Tech Stack Section */}
        <div className="mt-15 mx-10">
          <p className="font-semibold text-xl mb-6">
            Technologies I have worked with
          </p>
          <div className="flex flex-col gap-y-4">
            <p>
              <span className="underline">Programming Languages</span> :
              Javascript / Typescript, Python, C++.
            </p>
            <p>
              <span className="underline">Frontend</span> : ReactJS, NextJS,
              TailwindCSS.
            </p>
            <p>
              <span className="underline">Backend</span> : NodeJS, ExpressJS,
              FastAPI, Hono, ZOD.
            </p>
            <p>
              <span className="underline">Database</span> : Postgre, SQL,
              MongoDB, Prisma, Redis.
            </p>
            <p>
              <span className="underline">Devops</span> : AWS, Cloudflare,
              NGINX, Docker,{" "}
            </p>
          </div>
        </div>
        {/* //Experience Section */}
        <div className="mt-16 mx-10">
          <p className="font-semibold text-xl mb-6">Experience</p>
          <div className="flex">
            <p>
              <span className="text-slate-600">May 2024 - Sep 2024</span>{" "}
              <span className="font-bold">Open Source Contributor</span> @GSSOC
            </p>
            <a
              href="https://drive.google.com/file/d/13ZTwDaayCfg3A8kOuchURL9o8QGWfVQa/view"
              target="_blank"
            >
              <FaExternalLinkAlt className="ml-4" />
            </a>
          </div>
        </div>
        {/* //Projects Section */}
        <ProjectComp />
        {/* //Footer Section */}
        <div className="mt-30 flex justify-center">
          <p>© SHUVAM MANDAL</p>
          <IoMdRocket className="ml-2" />
        </div>
      </div>
    </>
  );
};
