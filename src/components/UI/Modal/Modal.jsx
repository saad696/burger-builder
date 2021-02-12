import React from "react";
import Aux from "../../../hoc/Auxilary";
import BackDrop from "../BackDrop/BackDrop";
import StylesOfModal from "./Modal.module.css";

const Modal = (props) => (
    <Aux>
      <BackDrop show={props.modal} click={props.cancel}/>
      <div
        className={StylesOfModal.Modal}
        style={{
          transform: props.modal ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.modal ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
)

export default Modal;
