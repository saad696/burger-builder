import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawToggle from '../SideDrawer/SideDrawerToggle/SideDrawToggle'
import stylesOfToolbar from "./Toolbar.module.css"

const Toolbar = (props) => {
    return (
        <header className={stylesOfToolbar.Toolbar}>
            <SideDrawToggle openSideMenu={props.openMenu}/>
                <Logo height="95%"/>
            <nav className={stylesOfToolbar.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default Toolbar
