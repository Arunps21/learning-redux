import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "./redux/counter/counterSlice";

function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  let incFun=()=>{
    dispatch(increaseCount())
  }
  let decFun=()=>{
    dispatch(decreaseCount())
  }
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is {count}</h3>
      <button onClick={incFun}>Increase</button>
      <button onClick={decFun}>Decrease</button>
    </div>
  );
}

export default Counter;
