import image from "../assets/pic.jpg";

export const Header = () => {
  return (
    <>
      <div className="flex">
        <div className="h-20 w-20">
          <img className="rounded-full hover:" src={image} alt="Shuvam image" />
        </div>
        <div className="px-8">
          <div className="text-3xl font-semibold">SHUVAM MANDAL</div>
          <div className="flex text-green-600">
            <p className="hover:underline pr-4 border-dashed border-r-2">About</p>
            <p className="hover:underline px-4 border-dashed border-r-2">Projects</p>
            <p className="hover:underline px-4">Experiance</p>
          </div>
        </div>
      </div>
    </>
  );
};
