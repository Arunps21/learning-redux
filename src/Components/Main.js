import Counter from "./Counter";
import Aside from "./Aside";
function Main({count, setCount, color, setColor, newColor}) {
  return (
    <div className="main">
      <Counter count={count} setCount={setCount}/>
      <Aside color={color} setColor={setColor} newColor={newColor}/>
    </div>
  );
}

export default Main;
