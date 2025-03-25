import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div className="mx-20 mt-16 font-mono h-screen">
        <Header />
        <div className="mt-20 ml-20 mr-30">
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
          <div className="mt-6">
            <p>Find me on </p>
          </div>
        </div>
        <div className="mt-15 ml-20 mr-30">
          <p className="font-semibold text-xl mb-6">Technologies I have worked with</p>
          <div className="flex flex-col gap-y-4">
          <p><span className="underline">Programming Languages</span> : Javascript / Typescript, Python, C++.</p>
          <p><span className="underline">Frontend</span> : ReactJS, NextJS, TailwindCSS.</p>
          <p><span className="underline">Backend</span> : NodeJS, ExpressJS, FastAPI, Hono, ZOD.</p>
          <p><span className="underline">Database</span> : Postgre, SQL, MongoDB, Prisma, Redis.</p>
          <p><span className="underline">Devops</span> : AWS, Cloudflare, NGINX, Docker, </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
