import { MdSwitchAccount } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import BookLogo from "../image/bookLogo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  /*Font change btn state*/
  const [btnOn, setBtnOn] = useState(false);

  return (
    <>
      {/*banner*/}
      <banner>
        <div className=" bg-blue-500 w-full h-20 flex items-center justify-center">
          <div className=" flex items-center justify-center">
            <div className=" flex items-center gap-4 justify-between">
              <span className=" ml-10 bg-white p-2 rounded-tr-3xl rounded-br-3xl font-bold font-serif shadow-2xl">
                Book Shop
              </span>
              <h1 className=" text-white text-xl">
                যে কোনো বই সল্প মূল্যে পাওয়া যায়
              </h1>{" "}
              <span className=" bg-red-500 p-2 m-1 rounded-full text-xl font-bold text-white">
                30% Discount{" "}
              </span>
            </div>
          </div>
        </div>
      </banner>

      {/*menuBar*/}
      <div className="  bg-gray-700  hidden md:flex justify-between">
        {/*left*/}
        <div className=" flex items-center gap-5 text-gray-400 m-2 ml-20">
          <a
            href=""
            className="hover:bg-sky-700 hover:text-white p-1 duration-200 rounded-md"
          >
            Books
          </a>
          <a
            href=""
            className="hover:bg-green-700 hover:text-white p-1 duration-200 rounded-md"
          >
            Item
          </a>
          <a
            href=""
            className="hover:bg-red-500 hover:text-white p-1 duration-200 rounded-md"
          >
            E_Learning
          </a>
          <a
            href=""
            className=" hover:bg-amber-400 hover:text-white p-1 duration-200 rounded-md"
          >
            Tender
          </a>
          <a href="" className=" bg-indigo-600 p-1 rounded-md text-white">
            Doe
          </a>
          <a href="" className=" bg-green-700 p-1 rounded-md text-white">
            Send book
          </a>
        </div>

        {/*right*/}
        <div className=" flex items-center gap-5 text-gray-400 m-2 mr-20 ">
          <a
            href=""
            className="hover:bg-red-700 hover:text-white p-1 duration-200 rounded-md"
          >
            <AiFillYoutube />
          </a>
          <a
            href=""
            className="hover:bg-sky-700 hover:text-white p-1 duration-200 rounded-md"
          >
            <FaFacebookF />
          </a>
          <a
            href=""
            className=" hover:bg-gray-300 hover:text-red-500 p-1 duration-200 rounded-md"
          >
            <FaGoogle />
          </a>
          <a
            href=""
            className=" hover:bg-sky-700 hover:text-white p-1 duration-200 rounded-md"
          >
            <FaLinkedinIn />
          </a>
          <a
            href=""
            className=" hover:bg-purple-600 hover:text-white p-1 duration-200 rounded-md"
          >
            <FaSquareInstagram />
          </a>

          {/* font change btn div*/}
          <div className="Btn flex border rounded text-sm">
            <button
              onClick={() => setBtnOn(!btnOn)}
              className={` p-1 duration-500 ${
                btnOn ? "bg-white text-black" : " bg-transparent"
              } `}
            >
              Eng
            </button>{" "}
            <button
              onClick={() => setBtnOn(!btnOn)}
              className={` p-1 duration-500 ${
                btnOn ? " bg-transparent " : " bg-white text-black"
              } `}
            >
              বাংলা
            </button>
          </div>
        </div>
      </div>

      <nav className=" md:flex inline-block text-center justify-between bg-white shadow-md text-gray-600 font-bold font-mono items-center p-3 w-full">
        {/*Logo */}
        <div className="Logo flex items-center justify-center gap-2 cursor-pointer mr-3">
          <img src={BookLogo} alt="Logo" className=" h-14" />
        </div>

        {/*About info*/}
        <div className="md:flex inline-block item-center justify-center  gap-10 ">
          <a href="" className=" cursor-pointer text-md md:text-xl">
            Book
            <span className=" bg-green-500 rounded-tr-xl rounded-bl-xl p-1 text-white text-md md:text-xl">
              Resource
            </span>
          </a>
          <div className="  text-gray-500 p-1 rounded-bl-xl rounded-tr-xl flex items-center justify-center gap-2 text-md md:text-xl">
            <Link
              to="singin"
              className=" flex items-center justify-center gap-2"
            >
              <MdSwitchAccount />
              <span className=" text-green-500  hover:text-green-700 duration-200">
                Sign in
              </span>
            </Link>
            <span>or</span>
            <Link to="registrationForm">
              <span className=" text-green-500 hover:text-green-700 duration-200">
                Create Account
              </span>
            </Link>
          </div>
          <Link
            to="contact"
            className=" flex items-center justify-center gap-2 cursor-pointer text-md md:text-xl"
          >
            <TfiHeadphoneAlt />
            <span>Contact</span>
          </Link>

          <Link
            to="shopingCard"
            className=" bg-red-500 hover:bg-red-300 duration-200 text-white flex items-center justify-center gap-1 px-4 py-1 rounded-md"
          >
            Cart <FaShoppingCart />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
