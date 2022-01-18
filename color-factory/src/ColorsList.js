import { Link } from "react-router-dom";
import './ColorsList.css'

function ColorsList({colors}) {
  const colorLinks = colors.map((color, ind) => {
    const name = Object.keys(color)[0];
    return (<p key={ind}>
      <Link to={`/colors/${name}`}>{name}</Link>
    </p>)
  });
  return (
    <div className="ColorsList">
      <h3>Please select a color</h3>
      {colorLinks}
    </div>
  );
}

export default ColorsList;
