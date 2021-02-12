import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import stylesOfBuildControls from "./BuildControls.module.css";

const controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Salad", type: "salad" },
];
const BuildControls = (props) => {
  return (
    <div className={stylesOfBuildControls.BuildControls}>
      <p>
        Current Price:{" "}
        <i>
          {props.price}
          <sup>$</sup>
        </i>
      </p>
      {controls.map((cntrl) => (
        <BuildControl
          key={cntrl.label}
          label={cntrl.label}
          addIngreds={() => props.updatedIngreds(cntrl.type)}
          deductIngreds={() => props.deductedIngreds(cntrl.type)}
          disabled={props.disabled[cntrl.type]}
        />
      ))}
      <button
        disabled={!props.purchaseable}
        className={stylesOfBuildControls.OrderButton}
        onClick={props.show}
      >
        Order
      </button>
    </div>
  );
};

export default BuildControls;
