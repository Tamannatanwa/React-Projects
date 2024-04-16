import { useState } from "react";
import data from "./Data";
import { Add, Remove } from "@mui/icons-material";

const Accordian = () => {
  const [open, setOpen] = useState(false);
  const showsQuestion = () => {
    setOpen(!open);
  };
  return (
    <div className="body">
    <div>
      {data.map((item) => {
        return (
          <div key={item.id} className="main-body">
            <div className="flex">
              <h2>{item.title}</h2>
              <button onClick={showsQuestion}>
                {open ? <Remove /> : <Add />}
              </button>
            </div>
            {open && <p>{item.info}</p>}
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Accordian;

