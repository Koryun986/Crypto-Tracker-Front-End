import React from "react";
import "./../../../styles/_modal.scss";

interface ModalProps {
  active: boolean,
  setActive(t: boolean) : void,
  children : any,
}

export default function Modal({active, setActive, children}: ModalProps) {
  return (<div className={active ? "Modal Modal_Active" : "Modal"} onClick={ () => setActive(false)} >
            <div className={active ? "Modal_Container Modal_Container_Active" : "Modal_Container"} onClick={e => e.stopPropagation()}>
              {children}
            </div>
        </div>)
}
