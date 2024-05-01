import { IoMailUnread } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import appStore from "../image/App-Store.svg";
import playStore from "../image/google-play.svg";

const Footer = () => {
  return (
    <>
      <div className=" bg-slate-600 grid grid-row-4 md:grid-cols-4 gap-2 text-center p-2 ">
        {/* About Saction */}
        <div className="About ">
          <h1 className=" text-2xl font-bold font-serif text-gray-100">
            About Us
          </h1>
          <ul className="   text-gray-400 font-mono cursor-pointer p-1 ">
            <li> About bookShop.com</li>
            <li>Terms & Conditions</li>
            <li>Accessibility Statement</li>
            <li>Privacy Policy</li>
            <li>Feedback</li>
          </ul>
        </div>

        {/* Detail Saction */}
        <div className="Detail ">
          <h1 className="text-2xl font-bold font-serif text-white">Detail</h1>
          <ul className="  text-gray-400 font-mono cursor-pointer p-1 ">
            <li> Books-Collection</li>
            <li>Books Item</li>
            <li>Feedback</li>
          </ul>
        </div>

        {/* Contact Saction */}
        <div className="Contact">
          <h1 className="text-2xl font-bold font-serif text-white">Contact</h1>
          <ul className=" text-gray-400 ">
            <a href="" className=" flex items-center gap-2 justify-center ">
              <IoMailUnread />
              <p>bookshop.com</p>
            </a>
            <a href="" className=" flex gap-2 items-center justify-center">
              <FaFacebook /> <p>Book Shop</p>
            </a>
            <a href="" className=" flex gap-2 items-center justify-center">
              <FaPhone />
              843-550-31
            </a>
            <a href="" className=" flex gap-2 items-center justify-center">
              <CiLinkedin />
              Niloy
            </a>
            <a href="" className=" flex gap-2 items-center justify-center">
              <img className=" h-8" src={appStore} alt="" />
            </a>
            <a href="" className=" flex gap-2 items-center justify-center p-1">
              <img className=" h-8" src={playStore} alt="" />
            </a>
          </ul>
        </div>

        {/* Adress Saction */}
        <div className="Adress ">
          <h1 className="text-2xl font-bold font-serif text-white">Adress</h1>
          <ul className="text-gray-400 font-mono cursor-pointer p-1 ">
            <li> Country : Bangladesh</li>
            <li> city : Dhaka</li>
            <li> District : Narayanganj</li>
          </ul>
        </div>
      </div>
      <div className=" w-full p-2 bg-gray-400 ">
        <h1 className=" ml-80">© 2023-2024 Book Shop.com</h1>
      </div>
    </>
  );
};

export default Footer;
