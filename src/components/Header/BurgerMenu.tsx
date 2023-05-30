import React, {useState} from "react";
import "./../../styles/_burgerMenu.scss";
import Modal from "./helperComponents/Modal";
import BurgerMenuButton from "./helperComponents/BurgerMenuButton";

export default function BurgerMenu() {
    const [isActive, setIsActive ] = useState(false);

    return(
        <>
            {!isActive && <BurgerMenuButton active={isActive} setActive={setIsActive} /> }
            <div className="BurgerMenu_Navigation_Horizontal">
                <BurgerMenuNavigation />
            </div>
            <Modal active={isActive} setActive={setIsActive} >
                {isActive && <BurgerMenuButton active={isActive} setActive={setIsActive} /> }
                <BurgerMenuNavigation /> 
            </Modal>
        </>
        );
}

function BurgerMenuNavigation () {
    return (
            <div className="BurgerMenu_Navigation">
                <li>Search</li>
                <li>Favorites</li> 
                <li>Portfolio</li>
                <li>Profile</li>
            </div>
    );
}
