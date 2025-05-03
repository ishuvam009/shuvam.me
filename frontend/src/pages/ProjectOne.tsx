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
                    <img src={image1} alt="" />
                </div>
            </div>
        </>
    )
}