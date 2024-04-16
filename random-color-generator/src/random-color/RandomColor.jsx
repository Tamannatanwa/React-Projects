// #1234 hexa color
// rgb(23,34,21)

import { useEffect, useState } from "react";
import "./style.css";

const RandomColor = () => {
  const [typeOfcolor, setTypeOfcolor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const handlehexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
  };
  const handlergbcolor = () => {
    let rgbColor = "rgb(";
    for (let i = 0; i < 3; i++) {
      rgbColor += Math.floor(Math.random() * 256);
      if (i < 2) {
        rgbColor += ",";
      }
    }
    rgbColor += ")";
    console.log(rgbColor);
    setColor(rgbColor);
  };
  useEffect(() => {
    if (typeOfcolor === "rgb") {
      handlergbcolor();
    } else {
      handlehexColor();
    }
  }, [typeOfcolor]);
  return (
    <div
      style={{ width: "100vw", height: "100vh", background: color }}
      className="container"
    >
        <div>
      <button onClick={() => setTypeOfcolor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfcolor("rgb")}>Create Rgb Color</button>
      <button onClick={typeOfcolor === "hex" ? handlehexColor : handlergbcolor}>
        Generate Random Color
      </button>
      </div>
      <div className="color">
        <h3>{typeOfcolor === "rgb" ? "RGB color" : "HEX color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
