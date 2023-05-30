import React from "react";
import "./../../../styles/_burgerMenuButton.scss";

interface BurgerMenuButtonProps {
    active : boolean,
    setActive(callback : SetActiveCallback) : void,
}

type SetActiveCallback = (prev: boolean) => boolean;

export default function BurgerMenuButton({active, setActive}: BurgerMenuButtonProps) {
    return  (<div className="BurgerMenu_Button"
                onClick={() => setActive(prev => !prev)}>
                <div className={active ? "BurgerMenu_Button_Open" : ""}></div>
                <div className={active ? "BurgerMenu_Button_Open" : ""}></div>
                <div className={active ? "BurgerMenu_Button_Open" : ""}></div>
            </div>);
}
