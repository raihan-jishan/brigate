import { useEffect, useState } from "react";
import { PiPaintBrushBroadBold } from "react-icons/pi";
import { navLinkData } from "../../constants";
import { BtnPrimary } from "../ui/button";
import Logo from "../ui/logo";
import NavLink from "../ui/navLink";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu open state
  const [bgColor, setBgColor] = useState("#faeada"); // Background
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll effect to change navbar color
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setBgColor("#fdf6ef"); // Dark background color when scrolled down
      } else {
        setBgColor("#faeada"); // Transparent background when at the top
      }
    };

    window.addEventListener("scroll", changeColor);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-50   `}
      style={{ backgroundColor: bgColor }}
    >
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu} // Toggle menu on click
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinkData.map((item, index) => (
            <NavLink key={index} label={item.name} path={item.path}/>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Button */}
          <BtnPrimary
            label={"Work with Us"}
            icon={<PiPaintBrushBroadBold size={25} />}
            variant={"nav"}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu} // Close menu on click
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinkData.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
