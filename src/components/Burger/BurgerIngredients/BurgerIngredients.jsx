import React from 'react'
import PropTypes from "prop-types"

import stylesOfBurgerIngredient from "./BurgerIngredients.module.css"

const BurgerIngridients = (props) => {
    let ingredients = null;
    
    switch (props.type) {
        case ("bottomBread"):
            ingredients = <div className={stylesOfBurgerIngredient.BreadBottom}></div>
            break;
        case ("topBread"):
            ingredients = (
                <div className={stylesOfBurgerIngredient.BreadTop}>
                <div className={stylesOfBurgerIngredient.Seeds1}></div>
                <div className={stylesOfBurgerIngredient.Seeds2}></div>
            </div>
            )
            break;
        case ("meat"):
            ingredients = <div className={stylesOfBurgerIngredient.Meat}></div>
            break;
        case ("cheese"):
            ingredients = <div className={stylesOfBurgerIngredient.Cheese}></div>
            break;
        case ("salad"):
            ingredients = <div className={stylesOfBurgerIngredient.Salad}></div>
            break;
        case ("bacon"):
            ingredients = <div className={stylesOfBurgerIngredient.Bacon}></div>
            break;
        default:
            ingredients = null;
    }

    return ingredients
}

BurgerIngridients.propTypes = {
    type: PropTypes.string.isRequired
}



export default BurgerIngridients
