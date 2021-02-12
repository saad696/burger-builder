import React from "react";
import Aux from "../../hoc/Auxilary";

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
      <span style={{ textAlign: "center" }}>
        <p>Proceed to checkout?</p>
        <p>
          Total: {props.total}
          <sup>$</sup>
        </p>
      </span>
    </Aux>
  );
};

export default OrderSummary;
