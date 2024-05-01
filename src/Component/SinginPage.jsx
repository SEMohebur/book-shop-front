import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SinginPage = () => {
  //User Input Control state
  const [value, setValue] = useState({
    name: "",
    password: "",
  });

  //inpute onChange method
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  //Navigate
  const navigate = useNavigate();

  // validation chack method
  const validation = (value) => {
    let errors = {};

    if (!value.name) {
      errors.name = "Name Requird";
    } else if (value.name.length < 5) {
      errors.name = "Name must be more than 5 char";
    }

    if (!value.password) {
      errors.password = "Password Requird";
    } else if (value.password.length < 8) {
      errors.password = "Password must be more than 8 char";
    }
    return errors;
  };

  //Error state
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(value));
  };

  // form submitted

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      value.name !== "" &&
      value.password !== ""
    ) {
      alert("Form Submitted");
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return (
    <div className="perent-div w-full h-screen  flex items-center justify-center  bg- bg-indigo-700">
      <form onSubmit={handleSubmit}>
        <div className="card bg-white p-5 rounded-xl  text-center">
          <div className=" card_body pt-10 pb-10 w-60">
            <span className=" flex justify-center text-indigo-700 text-4xl">
              <FaUser />
            </span>
            <h1 className=" mt-4 mb-10 font-bold text-gray-500 font-serif text-xl">
              Log in to Book Shop
            </h1>

            {/*Inpute div*/}
            {errors.name && (
              <p className=" text-red-400 font-serif text-sm">{errors.name}</p>
            )}

            <div className="input border rounded-xl flex items-center text-gray-500 mb-5">
              <FaUser className=" ml-2" />
              <input
                onChange={handleChange}
                value={value.name}
                name="name"
                type="text"
                placeholder="Username"
                className="  outline-none bg-slate-100 text-center ml-5 "
              ></input>
            </div>
            {errors.password && (
              <p className=" text-red-400 font-serif text-sm">
                {errors.password}
              </p>
            )}
            <div className="input border rounded-xl flex items-center text-gray-500 ">
              <FaLock className=" ml-2" />
              <input
                onChange={handleChange}
                value={value.password}
                name="password"
                type="text"
                placeholder="Password"
                className="  outline-none bg-slate-100 text-center ml-5 "
              ></input>
            </div>
            {/*remember me or forgat password*/}
            <div className="prenet flex items-center text-gray-400  justify-between">
              <div className="remember_me flex items-center text-sm m-2">
                <input type="checkbox" />{" "}
                <span className=" "> Remember me</span>
              </div>
              <div className=" forgetp_assword hover:text-green-950 text-sm underline cursor-pointer">
                {" "}
                Forget Password?
              </div>
            </div>
            <button className=" m-5 bg-indigo-500 hover:bg-indigo-400 duration-200 text-white pl-5 pr-6 p-2 rounded-md">
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SinginPage;
