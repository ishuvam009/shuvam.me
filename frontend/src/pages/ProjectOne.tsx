import { Header } from "../components/Header"
import image1 from "../assets/FINSIGHT.png"

export const ProjectOne = () => {
    return(
        <>
            <div className="px-60 pt-16">
                <Header />
                <div className="mt-20">
                    <p className="text-xl mb-10 font-semibold">AI - powered finance chat system capable of processing and retrieving information from
                    financial articles to provide intelligent responses.</p>
                    <img src={image1} alt="finsight" />
                </div>
                <div className="mt-20">
                    <p className="text-2xl font-semibold">Tech Stack</p>
                    <ul className="list-disc mt-5 ml-8">
                        <li>VectorDB</li>
                        <li>LLM</li>
                        <li>RAG</li>
                        <li>FastAPI</li>
                        <li>React</li>
                        <li>MongoDB</li>
                    </ul>
                </div>

                <div className="mt-10">
                    <p className="text-xl font-semibold">Features Build</p>
                    <ul className="list-disc mt-5 ml-8">
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </>
    )
}