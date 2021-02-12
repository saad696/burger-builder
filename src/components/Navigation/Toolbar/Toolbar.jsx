import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import stylesOfToolbar from "./Toolbar.module.css"

const Toolbar = () => {
    return (
        <header className={stylesOfToolbar.Toolbar}>
            <div>Menu</div>
                <Logo height="95%"/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default Toolbar
