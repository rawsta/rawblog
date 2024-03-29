import React, { Component, useState, useEffect } from "react";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";
import ThemeContext from "../../context/ThemeContext";
import rawLogo from "../../../static/logos/logo-rawsta.svg";
import "./Navigation.css";


var classNames = require('classnames');

class Navigation extends Component {

  state = {
    isThicc: global.localStorage && global.localStorage.getItem('sidebar') === 'thicc',
  };

  handleSide = () => {
    const { isThicc } = this.state;

    if (isThicc) {
      if (global.localStorage) {
        global.localStorage.setItem('sidebar', 'skinny');
      }
    } else {
      if (global.localStorage) {
        global.localStorage.setItem('sidebar', 'thicc');
      }
    }

    this.setState({
      isThicc: !isThicc,
    });
  };

  render() {

    const {menuLinks} = config;
    const title = config.siteTitle;
    const titleShort = config.siteTitleShort;
    const url = config.siteUrl;
    const { isThicc } = this.state;

    const menuClass = classNames({
      sidebar: true,
      thicc: this.state.isThicc,
    });

    return (
      <ThemeContext.Consumer>
    {theme => (
          <aside className={menuClass}>
            <header className="navigation">
              <button onClick={this.handleSide}>
                <i className="fas fa-angle-double-right"></i>
              </button>
              <span className="kopfzeile">
                <a
                  href={url}
                  title={title}
                >
                  <img
                    src={rawLogo}
                    className="logo-small"
                    alt={title}
                  />
                  <h2>{titleShort}</h2>
                </a>
              </span>

            <nav>
              <ul>
                {menuLinks.map(link => (
                  <li>
                  <Link key={link.name} to={link.link} activeClassName="active">
                      <i className={link.iconClassName}></i>
                      <span>{link.name}</span>
                  </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <footer>
            <button className="lightswitch" onClick={theme.toggleDark}>
              {theme.dark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>

              <h5 className="legal-title">§</h5>
              <div className="rechtliches">
                <Link to="/privacy">Privacy</Link>
                <Link to="/imprint">Imprint</Link>
              </div>

            </footer>
          </aside>
      )}
  </ThemeContext.Consumer>
    );
  }
}

export default Navigation;
