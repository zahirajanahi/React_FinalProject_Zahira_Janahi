import { createContext, useContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const all = { userData, setUserData }; 

  return <MyContext.Provider value={all}>{children}</MyContext.Provider>;
};

export const MyAppContext = () => useContext(MyContext); 
