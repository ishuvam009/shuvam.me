import { Link } from "react-router-dom";

export const ProjectComp = () => {
  return (
    <>
      <div className="mt-16 mx-10">
        <p className="font-semibold text-xl mb-6">Projects</p>
        <div>
          <div className="mb-4">
            <Link to={""}>
              <p className="underline underline-offset-4">
                FinSight AI - AI-Powered Financial Insights Engine.
              </p>
            </Link>
            <p className="text-orange-400">
              [React, FastAPI, Langchain, AWS Lambda, FAISS]
            </p>
          </div>
          <div className="mb-4">
            <Link to={""}>
              <p className="underline underline-offset-4">
                ScribeX - Medium like blogging platform.
              </p>
            </Link>
            <p className="text-orange-400">
              [Hono, Reacct, Postgresql, Cloudflare Workers, Prisma, ZOD,
              Connection Pooling]
            </p>
          </div>
          <div className="mb-4">
            <Link to={""}>
              <p className="underline underline-offset-4">
                Payment Wallet - Peer to peer money transfer,
              </p>
            </Link>
            <p className="text-orange-400">
              [React, Express.js, Node.js, MongoDB, Vercel, JWT, ZOD]
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
