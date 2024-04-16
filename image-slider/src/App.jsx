// import "./App.css";
import ImageSLider from "./components/image-slider/ImageSLider";

function App() {
  return (
    <>
      <ImageSLider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page= {"1"}
      />
    </>
  );
}

export default App;
