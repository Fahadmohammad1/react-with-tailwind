import "./App.css";
import Header from "./components/Header/Header";
import Mylinechart from "./components/MylineChart/Mylinechart";
import Pricing from "./components/Pricing/Pricing";
import SpecialChart from "./components/SpecialChart/SpecialChart";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-5xl">Welcome to Money club</h1>
      <Pricing></Pricing>
      <div>
        <Mylinechart></Mylinechart>
        <SpecialChart></SpecialChart>
      </div>
    </div>
  );
}

export default App;
