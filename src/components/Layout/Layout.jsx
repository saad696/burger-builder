import React from "react";
import Aux from "../../hoc/Auxilary";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import stylesOfLayout from "./Layout.module.css"

const Layout = (props) => {
  return (
  <Aux>
    <SideDrawer/>
      <Toolbar/>
      <main className={stylesOfLayout.Content}>{props.children}</main>
  </Aux>
  )};

export default Layout;
