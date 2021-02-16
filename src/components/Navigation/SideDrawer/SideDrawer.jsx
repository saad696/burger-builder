import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Aux from "../../../hoc/Auxilary"
import BackDrop from "../../UI/BackDrop/BackDrop"
import stylesOfSideDrawer from "./SideDrawer.module.css"
import CrossBtn from './CrossBtn/CrossBtn'
const SideDrawer = (props) => {
    let sideDrawerSlide = [stylesOfSideDrawer.SideDrawer, stylesOfSideDrawer.Close];
    if(props.open){
        sideDrawerSlide = [stylesOfSideDrawer.SideDrawer, stylesOfSideDrawer.Open]
    }

    //console.log(sideDrawerSlide)

    return (
        <Aux>
            <BackDrop show={props.open} click={props.closed}/>
            <div className={sideDrawerSlide.join(" ")}>
                <CrossBtn closeSideDraw={props.CLOSE}/>
            <Logo height="21%"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    )
}

export default SideDrawer
