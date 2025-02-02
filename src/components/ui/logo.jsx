import { RiBuilding2Line } from "react-icons/ri";

const Logo = () => {
  return (
    <a href="#" className="-m-1.5 p-1.5 flex   ">
      <span>
        <RiBuilding2Line className="text-orange-800 text-3xl max-lg:text-2xl" />{" "}
      </span>
      <span className="text-2xl font-bold max-lg:text-xl">Brigate</span>
    </a>
  );
};

export default Logo;
