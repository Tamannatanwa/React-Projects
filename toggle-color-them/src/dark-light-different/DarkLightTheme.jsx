import React from "react";
import useLoalStorage from "./useLoalStorage";
import "./theme.css"

const DarkLightTheme = () => {
    const [theme,setTheme] = useLoalStorage("thame","dark")
    const handleToggleTheme = ()=>{
        setTheme(theme === "dark" ? "light" : "dark")
    }
  return (
    <div className="light-dark-node" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default DarkLightTheme;
