import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="manu-list-container">
      {list && list.length
        ? list.map((listItem,i) => <MenuItem item={listItem} key = {i} />)
        : null}
    </ul>
  );
};

export default MenuList;
