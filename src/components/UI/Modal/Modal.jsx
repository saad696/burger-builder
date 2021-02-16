import React, { Component } from "react";
import Aux from "../../../hoc/Auxilary";
import BackDrop from "../BackDrop/BackDrop";
import StylesOfModal from "./Modal.module.css";

class Modal extends Component {
  // shouldComponentUpdate(nextProps){
  //   return nextProps.show !== this.props.show;
  // }

  // componentDidUpdate() { 
  //   console.log("Modal updated");
  // }
  
  render() {
    return(
      <Aux>
      <BackDrop show={this.props.modal} click={this.props.cancel}/>
      <div
        className={StylesOfModal.Modal}
        style={{
          transform: this.props.modal ? "translateY(0)" : "translateY(-100vh)",
          opacity: this.props.modal ? "1" : "0",
        }}
      >
        {this.props.children}
      </div>
    </Aux>
    )
  }
}
export default Modal;
