import randomColor from "randomcolor";

function Aside({color, setColor}) {
  const newColor = randomColor()

  function colorChange(){
    setColor(newColor)
  }
  return (
    <div className="aside">
      <h2 style={{ color: color }}>Aside</h2>
      <button onClick={() => setColor(newColor)}>Change Color</button>
    </div>
  );
}

export default Aside;
