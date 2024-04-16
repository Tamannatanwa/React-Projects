// import "./App.css";
import TreeView from "./components/tree-view/TreeView";
import menus  from "./components/tree-view/data";
const App = () => {
  return (
    <div>
      <TreeView menus={menus}/>
    </div>
  )
};

export default App;
