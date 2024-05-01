import Navbar from "./Navbar";
import Footer from "./Footer";
import BodySaction from "./BodySaction";
// eslint-disable-next-line react/prop-types
const Home = ({ addToCard }) => {
  return (
    <div>
      <Navbar />
      <BodySaction addToCard={addToCard} />
      <Footer />
    </div>
  );
};

export default Home;
