import React from "react";
import "./../../styles/_navigationBar.scss";
import logo from "./../../resorces/CryptoTrackerLogo.png";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

export default function NavigationBar() {
    
    return  (
        <nav className="NavigationBar">
            <div className="NavigationBar_Container">
                <div className="NavigationBar_Logo">
                    <Link to={"/"} className="Link">
                        <img src={logo} />
                        <span>rypto Tracker</span>
                    </Link>
                </div>
                <BurgerMenu />
            </div>
        </nav>
            );
}
