import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import stylesOfSideDrawer from "./SideDrawer.module.css"
const SideDrawer = () => {
    return (
        <div className={stylesOfSideDrawer.SideDrawer}>
            <Logo height="21%"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer
