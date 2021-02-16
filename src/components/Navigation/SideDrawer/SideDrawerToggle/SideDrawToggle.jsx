import React from "react";
import  stylesOfMenuBtn from "./SideDrawToggle.module.css"

const SideDrawToggle = (props) => {
  return (
    <div onClick={props.openSideMenu} className={stylesOfMenuBtn.DesktopOnly}>
      <div className={stylesOfMenuBtn.Menu}></div>
      <div className={stylesOfMenuBtn.Menu}></div>
      <div className={stylesOfMenuBtn.Menu}></div>
    </div>
  );
};

export default SideDrawToggle;
