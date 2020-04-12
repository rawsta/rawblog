import React, { Component } from "react";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";
import rawLogo from "../../../static/logos/logo-rawsta.svg";
// import rawLogo from "../../../static/logos/logo-192.png";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    // const { config } = this.props;
    // const { menuLinks } = this.props;
    const {menuLinks} = config;
    const title = config.siteTitle;
    const titleShort = config.siteTitleShort;
    const url = config.siteUrl;

    return (
      <aside className="sidebar">

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

        <nav className="main-nav">
          <ul>
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} activeClassName="active">
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
        </nav>

        <footer>
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

          <h5 className="legal-title"> § </h5>
          <div className="rechtliches">
            <Link to="/imprint">Impressum</Link>
            <Link to="/privacy">Datenschutz</Link>
          </div>

        </footer>
      </aside>
    );
  }
}

export default Navigation;
