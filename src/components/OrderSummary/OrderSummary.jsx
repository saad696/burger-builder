import React from "react";
import Aux from "../../hoc/Auxilary";
import Button from "../UI/Button/Button";

const OrderSummary = (props) => {
  const orderSum = Object.keys(props.ingreds).map((ingkey) => {
    return (
      <li key={ingkey + Math.random()}>
        <span style={{ textTransform: "uppercase" }}>{ingkey}: </span>
        {props.ingreds[ingkey]}
      </li>
    );
  });
  return (
    <Aux>
      <span style={{ textAlign: "center" }}>
        <h3>Order Summary</h3>
      </span>
      <hr />
      <p>A delicious burger with following ingredients:</p>
      <ul>{orderSum}</ul>
      <hr />
      <span className="has-text-centered">
        <p>Proceed to checkout?</p>
        <p>
          Total: {props.total.toPrecision(3)}
          <sup>$</sup>
        </p>
        <Button clicked={props.cancelPurchase} btnTypes="Danger">Cancel</Button>
        <Button clicked={props.continuePurchase} btnTypes="Success">Continue</Button>
      </span>
    </Aux>
  );
};

export default OrderSummary;
