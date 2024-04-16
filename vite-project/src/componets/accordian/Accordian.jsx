//single selection

//ultiple selection

import { useState } from "react";
import data from "./Data";
import "./Style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const [enableMultiSelection, SetEnableMultiSelection] = useState(false);

  const [multiSelected, SetMultiSelected] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id);
  };
  const handleMultiSelection = (id) => {
    let cpyMulti = [...multiSelected];
    const currentIndex = cpyMulti.indexOf(id);
    if (currentIndex === -1) {
      cpyMulti.push(id);
    } else {
      cpyMulti.splice(currentIndex, 1);
    }
    SetMultiSelected(cpyMulti);
    console.log(multiSelected);
  };
  return (
    <div className="wrapper">
      <button onClick={() => SetEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection
          ? "able multi selection"
          : "Enable Multi Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiSelected.indexOf(dataItem.id) !== -1 && (
                    <p className="content">{dataItem.answer}</p>
                  )
                : selected === dataItem.id && (
                    <p className="content">{dataItem.answer}</p>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
