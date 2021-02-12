import React from "react";
import Aux from "../../hoc/Auxilary";

import stylesOfLayout from "./Layout.module.css"

const Layout = (props) => {
  return (
  <Aux>
      <div>Layout</div>
      <main className={stylesOfLayout.Content}>{props.children}</main>
  </Aux>
  )};

export default Layout;
