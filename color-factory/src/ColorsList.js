import { Link } from "react-router-dom";
import './ColorsList.css'

function ColorsList({colors}) {
  return (
    <div className="ColorsList">
      <h3>Please select a color</h3>
      {colors.map((color, ind) => (<p key={ind}><Link  to={`colors/${color}`}>{color}</Link></p>))}
    </div>
  );
}

export default ColorsList;