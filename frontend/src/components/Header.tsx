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
          <div className="flex gap-x-8 text-green-600">
            <p className="hover:underline">About</p>
            <p className="hover:underline">Projects</p>
            <p className="hover:underline">Experiance</p>
          </div>
        </div>
      </div>
    </>
  );
};
