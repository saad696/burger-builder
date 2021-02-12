import React from "react";
import stylesOfBurgerControl from "./BuildControl.module.css";

const BuildControl = (props) => {
  return (
    <div className={stylesOfBurgerControl.BuildControl}>
      <div className={stylesOfBurgerControl.Label}>{props.label}</div>
      <button
        className={stylesOfBurgerControl.Less}
        onClick={props.deductIngreds}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={stylesOfBurgerControl.More} onClick={props.addIngreds}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
