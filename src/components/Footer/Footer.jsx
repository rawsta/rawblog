import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import netlify from '../../../static/logos/netlify.png'
import gatsby from '../../../static/logos/gatsby.png'
import github from '../../../static/logos/github.png'

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
        {/* <div className="notice-container"> */}
        {/* <Link to={url}>
            <span>RSS</span>
          </Link> */}

        <p>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
            <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GatsbyJS"
            />
          </a>
          <a href="https://github.com/rawsta" title="Open-source on GitHub">
            <img
              src={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.netlify.com/" title="Hosted by Netlify">
            <img
              src={netlify}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Netlify"
            />
          </a>
        </p>

        <p>
          Handcrafted
          {copyright}
        </p>
        {/* </div> */}
      </footer>
    );
  }
}

export default Footer;
