import React, { Component } from "react";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";
import rawLogo from "../../../static/logos/logo-192.png";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    // const { config } = this.props;
    const title = config.siteTitle;
    const titleShort = config.siteTitleShort;
    const url = config.siteUrl;

    return (
      <aside className="sidebar">

        <header className="navigation">
          <span className="kopfzeile">
            <a href={url}>
              <img
                src={rawLogo}
                className="logo-small"
                alt={title}
              />
              <h2>{titleShort}</h2>
            </a>
          </span>
        </header>

        <footer>
          <section className="contact">
            <h3 className="contact-title">Kontakt</h3>
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
          </section>

          <div className="copyright">
            <p>
              &copy;
              {new Date().getFullYear()}
              {config.userName}
            </p>
          </div>

        </footer>
      </aside>
    );
  }
}

export default Navigation;
