import { useDispatch, useSelector } from "react-redux";
import randomColor from "randomcolor";
import { color_change } from "./redux/color/colorSlice";

function Aside() {
 const color = useSelector(state=>state.color.value)

 const dispatch = useDispatch()

 const colorFun=()=>{
  dispatch(color_change({
    color: randomColor()
  })); 
 }

  return (
    <div className="aside">
      <h2 style={{color:color}}>Aside</h2>
      <button onClick={colorFun}>Change Color</button>
    </div>
  );
}

export default Aside;
