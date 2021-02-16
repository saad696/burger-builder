import React from 'react'
import stylesOfCross from "./CrossBtn.module.css"

const CrossBtn = (props) => (<a href="#" className={stylesOfCross.close} onClick={props.closeSideDraw}></a>)
export default CrossBtn
