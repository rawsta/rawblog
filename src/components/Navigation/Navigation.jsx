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
            <button onClick={this.handleSide}>
              <i className="fas fa-angle-double-right"></i>
            </button>
            <header className="navigation">
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
            </header>

            <nav>
              <ul>
                {menuLinks.map(link => (
                  <Link key={link.name} to={link.link} activeClassName="active">
                    <li>
                      <i className={link.iconClassName}></i>
                      <span>{link.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>

            <footer>
          <button className="dark-switcher" onClick={theme.toggleDark}>
            {theme.dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
          </button>
              <h3 className="contact-title">Rawsta</h3>
              <section className="contact">
                <img
                  src={config.userAvatar}
                  className="user-pic"
                  alt={config.userName}
                />
                <div className="contact-details">
                  <span>{config.userName}</span>
                  <ul>
                    {config.userTwitter && (
                      <li>
                        <a
                          href={`https://twitter.com/${config.userTwitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                        )}
                    {config.userGithub && (
                      <li>
                        <a
                          href={`https://github.com/${config.userGithub}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github" aria-hidden="true" />
                        </a>
                      </li>
                        )}
                    {config.userEmail && (
                      <li>
                        <a
                          href={`mailto:${config.userEmail}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="far fa-envelope" aria-hidden="true" />
                        </a>
                      </li>
                        )}
                  </ul>
                </div>
              </section>

              <h5 className="legal-title">§</h5>
              <div className="rechtliches">
                <Link to="/privacy">Datenschutz</Link>
                <Link to="/imprint">Impressum</Link>
              </div>

            </footer>
          </aside>
      )}
  </ThemeContext.Consumer>
    );
  }
}

export default Navigation;
