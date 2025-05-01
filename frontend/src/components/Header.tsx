import image from "../assets/pic.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="flex">
        <div className="h-20 w-20">
          <img className="rounded-full hover:" src={image} alt="Shuvam image" />
        </div>
        <div className="px-8">
        <Link to={"/"}>
          <div className="text-3xl font-semibold">SHUVAM MANDAL</div>
        </Link>
          <div className="flex text-green-600">
            <Link to={"/"}>
              <p className="hover:underline pr-4 border-dashed border-r-2">
                About
              </p>
            </Link>
            <Link to={"/projects"}>
              <p className="hover:underline px-4 border-dashed border-r-2">
                Projects
              </p>
            </Link>
            <Link to={"/experience"}>
              <p className="hover:underline px-4">Experience</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
