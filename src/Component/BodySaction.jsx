import { FaShoppingCart } from "react-icons/fa";
//tost msg
import { ToastContainer } from "react-toastify";

import Detail from "./ProductDetail";

// eslint-disable-next-line react/prop-types
const BodySaction = ({ addToCard }) => {
  //tost msg

  return (
    <section className="  h-full p-5 flex items-center justify-center">
      {/*Tost msg*/}
      <ToastContainer />
      {/* perent div*/}
      <div className="grid grid-row-4 md:grid-cols-5 grid-cols-2 gap-10">
        {/*book card*/}
        {Detail.map((element) => {
          return (
            <div
              key={element.id}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img src={element.Img} className="h-40" alt="name" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-gray-500 mb-2">
                  {element.Title}
                </div>
                <p className="text-gray-700  text-sm font-thin">
                  {element.Disc}
                </p>
                <p className="text-red-500 text-end text-md font-bold mt-2">
                  ${element.Price}
                </p>
              </div>
              <div className="px-6 py-4">
                <button
                  onClick={() => addToCard(element)}
                  className="bg-blue-500 hover:bg-blue-700 duration-200 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
                >
                  Add to Cart <FaShoppingCart />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BodySaction;
