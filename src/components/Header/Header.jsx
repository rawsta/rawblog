import React, { Component } from "react";
import { Link } from "gatsby";
import "./Header.css";

class Header extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    return (
      <header className="header">
        <div className="notice-container">

          <Link to={url}>
            <button>Works</button>
          </Link>
          <h4>
            yeah!
          </h4>
        </div>
      </header>
    );
  }
}

export default Header;
