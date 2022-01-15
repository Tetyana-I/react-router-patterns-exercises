import { NavLink } from "react-router-dom";
import './Nav.css';

function Nav() {
    return (
        <div className="Nav">
            <h3>Welcome to the color factory</h3>
            <b><NavLink to="/colors/new">Add a Color</NavLink></b>
            <b><NavLink to="/colors">Colors List</NavLink></b>
        </div>
    )
}

export default Nav;