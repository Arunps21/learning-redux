function Header(props) {
  return (
    <div className="header">
      <h1 style={{color:props.color}}>REDUX Project</h1>
      <h3>The Count is {props.count} </h3>
    </div>
  );
}

export default Header;
