import { FaExternalLinkAlt } from "react-icons/fa";
import { Header } from "../components/Header";

export const Experiance = () => {
  return (
    <>
      <div className="mx-60 mt-16 font-mono h-screen">
        <Header />
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
      </div>
    </>
  );
};
