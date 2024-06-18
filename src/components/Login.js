import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // form validation
    const message = checkValidData(
      email.current.value,
      password.current.value,
      isSignInForm ? null : name.current.value // handle the case where name might not be needed
    );
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        {" "}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg "
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85"
      >
        <h1 className="font-bold text-3xl py-4 px-10">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="FullName....."
            className="my-4 p-4 w-full bg-gray-800 rounded-lg"
          />
        )}
        {!isSignInForm && (
          <input
            type="number"
            placeholder="Enter Phone Number...."
            className="my-4 p-4 w-full bg-gray-800 rounded-lg"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Enter Email Address....."
          className="my-4 p-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password....."
          className="my-6 p-4 w-full bg-gray-800 rounded-lg"
        />

        {!isSignInForm && (
          <div className="my-4">
            <label htmlFor="gender" className="block text-white">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              className="p-2 w-full bg-gray-800 rounded-lg"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        )}
        <p className="text-red font-bold text-lg py-3">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-800 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to NetflixGpt ? Sign Up Now"
            : " Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
