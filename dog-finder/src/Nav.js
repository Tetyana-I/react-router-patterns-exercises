import { NavLink } from "react-router-dom";
import './Nav.css';

function Nav({dogNames}) {
  return (
    <nav className="NavBar">
        <NavLink exact to='/dogs'>Home</NavLink>
       {dogNames.map((name,ind) => (<NavLink exact to={`dogs/${name}`} key={ind}>{name}</NavLink>))} 
    </nav>
  );
}

export default Nav;
