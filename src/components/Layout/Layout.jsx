import React, {Component} from "react";
import Aux from "../../hoc/Auxilary";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import stylesOfLayout from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerOpenHandler = () => {
    this.setState((PrevState) => {
      return {showSideDrawer: !PrevState.showSideDrawer} 
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar openMenu={this.sideDrawerOpenHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} CLOSE={this.sideDrawerCloseHandler} />
        <main className={stylesOfLayout.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
