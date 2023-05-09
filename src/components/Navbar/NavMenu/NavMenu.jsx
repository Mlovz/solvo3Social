import React from "react";
import cls from "./navMenu.module.scss";
import { Icon } from "@/components/Icon/Icon";

const NavMenu = () => {
  return (
    <div className={cls.nav}>
      <Icon type="Home" />
      <Icon type="Comment" />
      <Icon type="Compass" />
      <Icon type="Add" />
      <Icon type="Favorite" />
    </div>
  );
};

export default NavMenu;
