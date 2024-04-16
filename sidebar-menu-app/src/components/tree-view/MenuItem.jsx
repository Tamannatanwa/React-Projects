import { useState } from "react";
import MenuList from "./MenuList";
import {FaMinus,FaPlus} from "react-icons/fa"

const menuItem = ({ item }) => {
  const [displayCurrentChild, setDisplayCurrentChild] = useState([]);
  const handleToggleChildre = (currentLable) => {
    setDisplayCurrentChild({
      ...displayCurrentChild,
      [currentLable]: !displayCurrentChild[currentLable],
    });
  };
  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }} className="manu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildre(item.label)}>
            {
              displayCurrentChild[item.label] ? <FaMinus color="#fff" size={25}/> : <FaPlus color="#fff" size={25}/>
            }
          </span>
        ) : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChild[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default menuItem;

