import React from "react";
import appLogo from "../../assets/images/burger.gif";

import stylesOfLogo from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={stylesOfLogo.Logo}
    style={{height: props.height}}
    >
      <img src={appLogo} alt="App Logo" />
    </div>
  );
};

export default Logo;
