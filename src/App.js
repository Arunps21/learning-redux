import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
function App() {
  const [count,setCount] = useState(0)
  const [color, setColor] = useState("black");
  return (
    <div className="App">
      <Header count={count} color={color}/>
      <Main count={count} setCount={setCount} color={color} setColor={setColor}/>
      <Footer color={color}/>
    </div>
  );
}

export default App;
