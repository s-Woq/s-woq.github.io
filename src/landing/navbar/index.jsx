import "./index.css";
import image from "../../../img/plus.svg";
import { NavLink } from "react-router-dom";
import img4 from "../../../img/plus-s.png";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="add">
      <div className="add-sign">
      <span className="add-s">+</span>
      </div>
      </NavLink>
        
      <div className="center-div flex justify-between">
        <NavLink to="/locations">
          <p className="text-sm font-semibold">locations</p>
        </NavLink>
        <NavLink to="/discover">
          <p className="text-sm font-semibold">discover</p>
        </NavLink>
        <NavLink to="/events">
          <p className="text-sm font-semibold">events</p>
        </NavLink>
      </div>

      <NavLink to="/buy">
        <div className="icon icon-2">
          <div className="icn">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default NavBar;
