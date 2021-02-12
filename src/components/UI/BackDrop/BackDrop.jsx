import React from "react";
import stylesOfBackDrop from "./BackDrop.module.css";
const BackDrop = (props) => (
  props.show ? <div className={stylesOfBackDrop.Backdrop} onClick={props.click}></div> : null
)

export default BackDrop;
