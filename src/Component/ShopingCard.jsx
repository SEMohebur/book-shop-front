/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ShopingCard = ({ cardItem, setCardItem }) => {
  /* product Increment method*/
  const increment = (product) => {
    // eslint-disable-next-line react/prop-types
    const exsit = cardItem.find((x) => {
      return x.id === product.id;
    });
    setCardItem(
      // eslint-disable-next-line react/prop-types
      cardItem.map((item) => {
        return item.id === product.id
          ? { ...exsit, quantity: exsit.quantity + 1 }
          : item;
      })
    );
  };

  /* product decrement method*/
  const decrement = (product) => {
    // eslint-disable-next-line react/prop-types
    const exsit = cardItem.find((x) => {
      return x.id === product.id;
    });
    setCardItem(
      // eslint-disable-next-line react/prop-types
      cardItem.map((item) => {
        return item.id === product.id
          ? { ...exsit, quantity: exsit.quantity - 1 }
          : item;
      })
    );
  };

  /* remove product method*/
  const removeCard = (product) => {
    // eslint-disable-next-line react/prop-types
    const exsit = cardItem.find((x) => {
      return x.id === product.id;
    });
    if (exsit.quantity > 0) {
      setCardItem(
        // eslint-disable-next-line react/prop-types
        cardItem.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };

  /*Total Price count method*/
  // eslint-disable-next-line react/prop-types
  const totalPrice = cardItem.reduce(
    (Price, item) => Price + item.quantity * item.Price,
    0
  );
  return (
    <div className=" w-full h-screen ">
      <div className="flex items-center justify-center">
        <Link
          to="/"
          className=" bg-green-400 hover:bg-green-500 duration-200 rounded-md text-white p-1 mt-2 "
        >
          Back Home
        </Link>
      </div>

      {cardItem.length === 0 && (
        <div className=" flex items-center justify-center ">
          <h1 className=" m-2 text-xl font-bold text-gray-500">
            {" "}
            Card is empty pleas selact a product
          </h1>
          <Link
            to="/"
            className=" bg-red-500 text-white font-bold p-1 rounded-md m-2"
          >
            Shop Now
          </Link>
        </div>
      )}
      <div className=" card-container w-full h-screen  ">
        <div className=" card-product grid grid-row-4 md:grid-cols-5 grid-cols-1 gap-10">
          {cardItem.map((item) => {
            return (
              <div
                key={item.id}
                className=" cardBox shadow rounded flex m-2 p-2"
              >
                <div className="card-product-container">
                  <div className="card-img-box ">
                    <img
                      className=" w-20 text-center"
                      src={item.Img}
                      alt={item.Title}
                    />
                  </div>
                  <div className=" card_detail text-xl">
                    <h2>{item.Title}</h2>
                    <h3 className=" text-red-500"> Price : ${item.Price}</h3>
                    <button
                      onClick={() => decrement(item)}
                      className=" quantityDec"
                    >
                      -
                    </button>
                    <input
                      className=" border w-8 h-5"
                      type="text"
                      value={item.quantity}
                    ></input>
                    <button
                      onClick={() => increment(item)}
                      className=" quantityInc"
                    >
                      +
                    </button>
                    <h3> Sub Total: $ {item.Price * item.quantity}</h3>
                  </div>
                  <button
                    onClick={() => removeCard(item)}
                    className=" remove text-red-500 font-bold bg-gray-200 p-1 rounded-full "
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {cardItem.length > 0 && (
          <>
            <button className=" bg-red-500 text-white p-2 rounded-md">
              Check Out
            </button>
            <p className=" text-2xl font-bold text-gray-600">
              Total:$ {totalPrice}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ShopingCard;
