import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className=" flex">
      {" "}
      Contact Page{" "}
      <Link className=" bg-blue-500 p-2 rounded-md text-white font-sans" to="/">
        {" "}
        back to home
      </Link>
    </div>
  );
};

export default Contact;
