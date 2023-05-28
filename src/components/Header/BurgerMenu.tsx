import React, {useState} from "react";
import "./../../styles/_burgerMenu.scss";

export default function BurgerMenu() {
    const [isActive, setIsActive ] = useState(false);

    

    return(
        <>
            <div className="BurgerMenu_Button"
                onClick={() => setIsActive(prev => !prev)}
            >
                <div className={isActive ? "BurgerMenu_Button_Open" : ""}></div>
                <div className={isActive ? "BurgerMenu_Button_Open" : ""}></div>
                <div className={isActive ? "BurgerMenu_Button_Open" : ""}></div>
            </div>
            <div className={isActive ? "BurgerMenu BurgerMenu_Active" : "BurgerMenu"}>
                <li>Search</li>
                <li>Favorites</li> 
                <li>Portfolio</li>
                <li>Profile</li>
            </div>
        </>
        );
}
