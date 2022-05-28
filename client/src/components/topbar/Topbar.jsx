import React from "react";
import "./topbar.css";
import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";
import Green from "../../images/Green.png"


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
          <Link to="/" style={{ textDecoration: 'none' }}>
          <img className="logo" src={Green} alt=""/>
          </Link>
        <div className="topLeft">
          <div className="search-bar">
            <SearchBar />
          </div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <MoreVert />
          </div>
        </div>
      </div>
    </div>
  );
}
