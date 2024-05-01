import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinginPage from "./Component/SinginPage";
import Contact from "./Component/Contact";
import RegistrationForm from "./Component/Registation";
import ShopingCard from "./Component/ShopingCard";
import { useState } from "react";

//tost msg
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // tost msg
  const notify = () => toast("added to cart!");
  /*card item state*/
  const [cardItem, setCardItem] = useState([]);

  /*add to car method*/
  const addToCard = (product) => {
    notify();
    const exsit = cardItem.find((x) => {
      return x.id === product.id;
    });

    if (exsit) {
      alert("This Product is all ready added");
    } else {
      setCardItem([...cardItem, { ...product, quantity: 1 }]);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/*add to card props pass home component*/}
        <Route path="/" element={<Home addToCard={addToCard} />}></Route>
        <Route path="singin" element={<SinginPage />}></Route>
        <Route path="registrationForm" element={<RegistrationForm />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        {/*card item state value pass*/}
        <Route
          path="shopingCard"
          element={
            <ShopingCard cardItem={cardItem} setCardItem={setCardItem} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
