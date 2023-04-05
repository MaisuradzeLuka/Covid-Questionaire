import headerStyles from "./headerStyles.module.css";
import React from "react";

const Header = ({ page }) => {
  return (
    <div className={headerStyles.wrapper}>
      <img src="../../images/Group (1).png" alt="redberry logo" />
      <h2>{page}/4</h2>
    </div>
  );
};

export default Header;
