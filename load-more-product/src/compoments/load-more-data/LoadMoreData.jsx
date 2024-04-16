import { useEffect, useState } from "react";
import "./style.css";

const LoadMoreData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();
      if (data) {
        setData((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  // Fetch the initial data when

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    if (data && data.length >= 100) {
      setDisable(true);
    }
  }, [count]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {data && data.length
          ? data.map((product) => (
              <div key={product.id} className="product">
                <img src={product.thumbnail} alt={product.name} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disable} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disable && <p>You have reached to 100 products </p>}
      </div>
    </div>
  );
};

export default LoadMoreData;

// dammy json product api
// https://dummyjson.com/products

// 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
