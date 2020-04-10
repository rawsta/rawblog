import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">

        <UserLinks config={config} labeled />

        <div className="notice-container">
          <p>
            Handcrafted by
            {" "}
            <a href="https://github.com/rawsta">
              rawsta
            </a>
            .
          </p>

          <Link to={url}>
            <span>RSS</span>
          </Link>

          <p>{copyright}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
