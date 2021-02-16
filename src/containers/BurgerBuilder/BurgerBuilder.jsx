import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BurgerControls/BuildControls";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Auxilary";

const INGREDIENT_PRICES = {
  salad: 0.3,
  bacon: 0.9,
  cheese: 0.7,
  meat: 1.3,
};
export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      bacon: 0,
      meat: 0,
      salad: 0,
    },
    price: 4,
    purchaseable: false,
    purchasing: false,
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false });
  };

  continuePurschaseHandler = () => {
    alert("Forwarding...");
  };

  isPurchaseable = (ingreds) => {
    const sum = Object.keys(ingreds)
      .map((ingKey) => {
        return ingreds[ingKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      });

    this.setState({ purchaseable: sum > 0 });
    //console.log(this.state.purchaseable);
  };

  addIngredientsHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const updatedPrice = this.state.price + priceAddition;
    // console.log(priceAddition, updatedIngredients);
    this.setState({ price: updatedPrice, ingredients: updatedIngredients });
    this.isPurchaseable(updatedIngredients);
  };

  deductIngredientsHandler = (type) => {
    const updatedCount = this.state.ingredients[type] - 1;
    if (updatedCount < 0) {
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const updatedPrice = this.state.price - priceDeduction;
    // console.log(priceAddition, updatedIngredients);
    this.setState({ price: updatedPrice, ingredients: updatedIngredients });
    this.isPurchaseable(updatedIngredients);
  };

  render() {
    let disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    //console.log(disabledInfo)

    return (
      <Aux>
        <Modal
          modal={this.state.purchasing}
          cancel={this.cancelPurchaseHandler}
        >
          <OrderSummary
            ingreds={this.state.ingredients}
            total={this.state.price}
            cancelPurchase={this.cancelPurchaseHandler}
            continuePurchase={this.continuePurschaseHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          updatedIngreds={this.addIngredientsHandler}
          deductedIngreds={this.deductIngredientsHandler}
          price={this.state.price.toPrecision(3)}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          show={this.purchasingHandler}
        />
      </Aux>
    );
  }
}
