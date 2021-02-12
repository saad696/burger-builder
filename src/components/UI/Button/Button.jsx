import React from 'react'

import stylesOfButton from "./Button.module.css"

const Button = (props) => (
    <button
    className={[stylesOfButton.Button, stylesOfButton[props.btnTypes]].join(" ")}
    onClick={props.clicked}
    >{props.children}</button>
)
export default Button
