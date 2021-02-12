import React from 'react'
import BurgerIngridients from './BurgerIngredients/BurgerIngredients'

import stylesOfBurger from "./Burger.module.css"
const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, i) =>{
            return <BurgerIngridients key={ingKey+i} type={ingKey}/>

        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []); 
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding items</p>
    }
    
    return (
        <div className={stylesOfBurger.Burger}>
            <BurgerIngridients type="topBread"/>
            {transformedIngredients}
            <BurgerIngridients type="bottomBread"/>
        </div>
    )
}

export default Burger
