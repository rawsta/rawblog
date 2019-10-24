import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import { Link } from "gatsby";
import "./Header.css";

class Header extends Component {
  render() {
    const { config } = this.props;
    const title = config.siteTitle;
    const url = config.siteUrl;
    return (
      <header className="header">
        <span className="kopfzeile">

          <Link to={url}>
            <h2>{title}</h2>
          </Link>
          <h4>
            yeah!
          </h4>
        </span>
      </header>
    );
  }
}

export default Header;
