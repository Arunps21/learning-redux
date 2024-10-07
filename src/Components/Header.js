import { useSelector } from "react-redux";

function Header() {
  const color = useSelector(state=>state.color.value)
  const count = useSelector(state => state.counter.value)
  return (
    <div className="header">
      <h1 style={{color:color}}>REDUX Project</h1>
      <h3>The Count is {count}</h3>
    </div>
  );
}

export default Header;
