import { useEffect, useState } from "react";
import "./CustomScroll.css";
const CustomScroll = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.products.length > 0) {
        setLoading(false);
        setData(data.products);
      }
    } catch (error) {
      setErrMsg(error.massage);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handlScrollParcentage = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPercentage(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlScrollParcentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) return <p>Loading the data...</p>;
  if (errMsg) return <p>{errMsg}</p>;
  return (
    <div>
      <div className="top-container">
        <h1>CUstom Scroll Indiscator</h1>
        <div className="progressTracker">
          <div
            className="current-progress"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default CustomScroll;
