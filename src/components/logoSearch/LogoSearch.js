import React from "react";
import Logo from "../../img/logo.png";
import "./LogoSearch.css"
import { UilSearch } from "@iconscout/react-unicons";

function LogoSearch() {
  return (
    <div className="logosearch">
      <img src={Logo} alt="logo"></img>
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
}

export default LogoSearch;
