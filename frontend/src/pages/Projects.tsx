import { Header } from "../components/Header";

export const Projects = () => {
  return (
    <>
      <div className="mx-60 mt-16 font-mono h-screen">
        <Header />
        <div className="mt-16 mx-10">
          <p className="font-semibold text-3xl mb-8">Projects</p>
          <div>
            <div className="mb-4">
              <p className="underline underline-offset-4">
                FinSight AI - AI-Powered Financial Insights Engine.
              </p>
              <p className="text-orange-400">
                [React, FastAPI, Langchain, AWS Lambda, FAISS]
              </p>
            </div>
            <div className="mb-4">
              <p className="underline underline-offset-4">
                ScribeX - Medium like blogging platform.
              </p>
              <p className="text-orange-400">
                [Hono, Reacct, Postgresql, Cloudflare Workers, Prisma, ZOD,
                Connection Pooling]
              </p>
            </div>
            <div className="mb-4">
              <p className="underline underline-offset-4">
                Payment Wallet - Peer to peer money transfer,
              </p>
              <p className="text-orange-400">
                [React, Express.js, Node.js, MongoDB, Vercel, JWT, ZOD]
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
