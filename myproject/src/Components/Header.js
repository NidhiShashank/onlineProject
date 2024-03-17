import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { LuMailCheck } from "react-icons/lu";
import {
  // BiSolidLogInCircle,
  BiLogoTwitter,
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
  BiLogoGithub,
  BiCast,
} from "react-icons/bi";
import hojaimage from "../Images/loho2.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="transform-none">
        <div className="hidden md:block bg-black/95 text-sm font-bold text-white h-14">
          <div className="w-full h-full flex justify-between items-center  px-20">
            <div className="flex gap-2 items-center font-normal font-sans text-lg">
              <LuMailCheck />
              <span> Email: info@onlinehoja.in</span>
            </div>
            <ul className="flex gap-6  text-xl">
              <BiLogoTwitter />
              <BiLogoFacebookCircle />
              <BiLogoInstagramAlt />
              <BiLogoLinkedinSquare />
              <BiLogoYoutube />
              <BiLogoGithub />
              <BiCast />
            </ul>
          </div>
        </div>
      </div>

      <header
        className="flex justify-between items-center px-4 m-auto bg-black duration-700 w-full 
       h-24 md:px-12 text-white"
      >
        <a>
          <img src={hojaimage} alt="" className="w-20" />
          logo
        </a>
        <div className="flex gap-6">
          <ul className=" gap-6 hidden sm:flex ">
            <li className="hover:text-pink-700 hover:text-lg duration-300 ">
              Home
            </li>
            <li className="hover:text-pink-700 hover:text-lg duration-300">
              About Us
            </li>
            <li className="hover:text-pink-700 hover:text-lg duration-300">
              Contact
            </li>
            <li className="hover:text-pink-700 hover:text-lg duration-300">
              Course
            </li>
            <li className="hover:text-pink-700 hover:text-lg duration-300">
              My Leaning
            </li>
          </ul>
          <div className="flex gap-2">
            <div className="">
              <CgProfile className="text-2xl" />
              <div></div>
            </div>

            <GiHamburgerMenu
              onClick={() => setOpen(!open)}
              className="text-2xl sm:hidden"
            />
          </div>
        </div>
      </header>
      <div
        className={`flex  p-6 h-screen bg-black/95 fixed inset-y-20 inset-x-0 text-white duration-500
         sm:translate-x-full  ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col w-full ">
          <li className="p-3 hover:text-pink-700 hover:text-xl duration-300 ">
            Home
          </li>
          <li className="p-3 hover:text-pink-700 hover:text-xl duration-300 ">
            About Us
          </li>
          <li className="p-3 hover:text-pink-700 hover:text-xl duration-300 ">
            Contact
          </li>
          <li className="p-3 hover:text-pink-700 hover:text-xl duration-300 ">
            Course
          </li>
          <li className="p-3 hover:text-pink-700 hover:text-xl duration-300 ">
            My Leaning
          </li>
        </ul>
        {/* <RxCross2
         
        /> */}
        <ImCross
          onClick={() => setOpen(false)}
          className="text-white text-2xl"
        />
      </div>
    </>
  );
};

export default Header;
