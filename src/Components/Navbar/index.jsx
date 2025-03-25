import Card from "../Card";
import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar";
import "./styles.css"

function Navbar() {
    return (
        <nav>
            <Card>
            <ul className="nav flex relative justify-around  left-0  bottom-4 w-full  align-middle items-center  ">
                    
                    <li className="title relative right-40 align-baseline items-start text-white font-mono" ><p className="tt"><a href="./">Arc Noir</a></p></li>
                    <div className="relative left-20 flex justify-around gap-20">
                    <NavLink to="contact-us">
                    <li><span className="sign">Contact Us</span></li>
                    </NavLink>
                    <NavLink to="login">
                    <li><span className="sign">Log In</span></li>
                    </NavLink>
                   
                    <NavLink to="signup">
                    <li><span className="sign">Sign Up</span></li>
                    </NavLink>
                    </div>
                    
            </ul>
            </Card>
        </nav>
    );
}

export default Navbar;
