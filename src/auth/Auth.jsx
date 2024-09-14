import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyAppContext } from "../context";
import Footer from "../layouts/footer";


export const Auth = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = MyAppContext();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); 
    
    
    
    const handleLogin =  (e) => {
    e.preventDefault();
    const user = userData.find(
      (profile) => profile.email === email && profile.password === password
    );
    if (user) {
        setLoginMessage("Login successful!");
        setTimeout(() => {
            navigate("/")
        }, 3000);
    } else {
      setLoginMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
   
    <div className="mt-[13vh] p-20 flex gap-x-8 mx-auto ">


      <div className="p-10 ms-20 border-gray-400 border-[1px] w-[40vw] h-[35vh] ">
        <h1 className="text-3xl">New Customer</h1>
        <p className=" font-semibold pt-2 text-gray-500">Register Account</p>
        <p className="text-gray-400">
          By creating an account you will be able to shop faster, be up to date
          on an order's status, and keep track of the orders you have previously
          made.
        </p>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="px-8 py-2 bg-[#292929] text-white mt-10 font-medium text-sm ">
          CONTINUE
        </button>
      </div>



      <div className="flex flex-col gap-y-1 p-7 border-gray-400 border-[1px] w-[40vw]">
        <h1 className="text-3xl">Returning Customer</h1>
        <p className="pt-1 font-semibold text-gray-500">
          I am a returning customer
        </p>
        {loginMessage && (
          <p
            className={`text-center mb-4 ${
              loginMessage.includes("successful")
                ? "text-green-500"
                : "text-red-500"
            }`}>
            {loginMessage}
          </p>
        )}
        <form
          action=""
          onSubmit={handleLogin}
          className="flex flex-col gap-y-3">
          <label htmlFor="">Email</label>
          <input
            className="border-gray-400 border-[1px] px-3 py-2"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            className="border-gray-400 border-[1px] px-3 py-2"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="hover:text-red-400 duration-500">Forgot your password?</p>
          <div className="flex items-center gap-2 mt-5">
            <button className="px-8 py-2 bg-[#292929] text-white  font-medium text-sm ">
              SIGN IN
            </button>
            <p>
              {" "}
              or{" "}
              <span
                onClick={() => {
                  navigate("/");
                }}
                className="cursor-pointer hover:text-[#e65540] duration-500 ">
                Return to Store
              </span>
            </p>
          </div>
        </form>
      </div>
    </div> 
    <Footer/>
    </>
  );
};