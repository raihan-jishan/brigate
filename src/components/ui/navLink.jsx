const NavLink = ({ label , path}) => {
  return (
    <a href={path} className="text-[1rem] font-semibold text-black hover:text-gray-700   hover:border-b-2 hover:border-b-black  transition-all hover:font-extrabold ">
      {label}
    </a>
  );
};

export default NavLink;
