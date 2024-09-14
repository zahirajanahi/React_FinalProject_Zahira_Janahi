import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyAppContext } from "../context";
import Footer from "../layouts/footer";

export const Register = () => {
    
  const navigate = useNavigate();

  const { userData, setUserData } = MyAppContext();
  const [inputFirstName, setinputFirstName] = useState("");
  const [inputLastName, setinputLastName] = useState("");
  const [inputEmail, setinputEmail] = useState("");
  const [inputPassword, setinputPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const invalidChars = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProfile = {
      firstName: inputFirstName,
      lastName: inputLastName,
      email: inputEmail,
      password: inputPassword,
    };

    if (invalidChars.test(inputFirstName) || invalidChars.test(inputLastName)) {
      setValidationMessage("Your name contains special characters.");
      return;
    }
    if (inputFirstName == "") {
      setValidationMessage("Please Enter your First Name");
      return;
    }
    if (inputLastName == "") {
      setValidationMessage("Please Enter your Last Name");
      return;
    } else if (userData.find((element) => element.email === inputEmail)) {
      setValidationMessage("This email already exists.");
      return;
    } else if (inputPassword === "") {
      setValidationMessage("You should enter your password.");
      return;
    } else if (inputPassword.length < 8) {
      setValidationMessage("Your password should be 8 char or more  ");
      return;
    } else {
        setUserData([...userData, newProfile]);
        alert("you are sign Up")
        navigate("/auth")
    }
  };

  return (
    <>
    <div className="mt-[8vh] px-32 py-20 flex flex-col gap-y-3 ">
      <h1 className="text-4xl">Create Account</h1>
      <h1 className="font-medium ps-2">Your Personal Details</h1>
      {validationMessage && (
        <p className="text-red-500 mb-4">{validationMessage}</p>
      )}
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-3 w-[60vw]">
        <label htmlFor="">First Name</label>
        <input className="border-gray-400 border-[1px] px-3 py-2" type="text" placeholder="First Name" onChange={(e) => setinputFirstName(e.target.value)}/>
        <label htmlFor="">Last Name</label>
        <input className="border-gray-400 border-[1px] px-3 py-2" type="text" placeholder="Last Name" onChange={(e) => setinputLastName(e.target.value)}/>
        <label htmlFor="">Email</label>
        <input className="border-gray-400 border-[1px] px-3 py-2" type="email" placeholder="Email" onChange={(e) => setinputEmail(e.target.value)}/>
        <label htmlFor="">Password</label>
        <input className="border-gray-400 border-[1px] px-3 py-2" type="password" placeholder="Password" onChange={(e) => setinputPassword(e.target.value)}/>
        <div className="flex items-center gap-3 ">
        <button className="px-8 py-2 bg-[#292929] text-white mt-3">CREATE</button>
          <p>{" "}or{" "}
              <span
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer hover:text-[#e65540] duration-500">
              Return to Store
            </span>
          </p>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};