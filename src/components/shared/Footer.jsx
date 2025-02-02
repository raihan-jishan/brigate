import { footerDetailLinks, footerLinks } from "@/constants";
import { SocialIcons } from "@/constants/social-icons";
import { FaGooglePlay } from "react-icons/fa6";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { Button, buttonVariants } from "../ui/button";
const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex rounded-xl p-8  lg:items-start lg:gap-2 shadow-xl  "> 
        <HiOutlineBuildingStorefront  size={59} />
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-4xl font-bold rounded p-2 text-gray-900 border-b-4 w-[10%]    border-orange-200 max-lg:w-[50%] max-lg:-mt-5">
                  Brigate.
                </h2>

                <p className="mt-4 text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                  non cupiditate quae nam molestias.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              {/* send message form */}
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="   p-2   sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter email address for get free home delivary."
                    className="bg-gray-100   w-full p-4 rounded-xl outline-orange-200  "
                  />

                  <Button
                    className={buttonVariants({ className: "p-6 px-8  " })}
                  >
                    send
                  </Button>
                </div>
              </form>
            </div>
            {/* footer links */}
            {footerLinks.map((item, index) => {
              return (
                <div className="col-span-2 sm:col-span-1" key={index}>
                  <p className="font-medium text-gray-900">{item.title}</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    {item.links.map((item, index) => {
                      return (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-gray-700 transition hover:opacity-75"
                          >
                            {" "}
                            {item.label}{" "}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            {/* download apps links */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-semibold   text-gray-900">Get Our Apps</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Button
                    className={buttonVariants({
                      className: "p-8 px-12  rounded-full max-lg:px-32",
                    })}
                  >
                    <FaGooglePlay size={30} /> Play Store
                  </Button>
                </li>

                <li>
                  <Button
                    className={buttonVariants({
                      className: "p-8 px-12  rounded-full max-lg:px-32",
                    })}
                  >
                    <IoLogoAppleAppstore size={30} /> IOS Store
                  </Button>
                </li>
              </ul>
            </div>
            {/* social links  */}
            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              {SocialIcons.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <span className="sr-only">{item.name}</span>

                      {item.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            {/* copy write  */}
            <p className="  text-gray-700 text-lg">
              &copy; {new Date().getFullYear()} OpusCafé All rights reserved.
            </p>
            {/* footer bottom links  */}
            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              {footerDetailLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      {item.name}{" "}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
