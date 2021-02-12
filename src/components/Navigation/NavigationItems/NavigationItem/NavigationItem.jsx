import React from "react";
import stylesOfNavigationItem from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <li className={stylesOfNavigationItem.NavigationItem}>
      <a
        href={props.link}
        className={props.active ? stylesOfNavigationItem.active : null}
      >
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
