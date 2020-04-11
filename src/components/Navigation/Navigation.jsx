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
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 207">
                <path fill="#830000" d="M9.3 153.9V50.8c0-23.1 19.2-41.5 42.6-41.5h58.9c41.3 0 74.7 33.4 74.7 74.7 0 25.8-12.1 48.4-32.1 62.3-1.3.8 0 3.4 1.6 2.6 8.7-3.9 16.8-9.5 23.7-17.3 11.8 16.8 9.7 38.9-5.3 53.9s-43.4 17.9-57.6-1.3l-22.6-26.8c-1.3 22.1-19.2 39.2-42.1 39.2-22.6-.1-41.8-19.3-41.8-42.7z"/>
                <path fill="#F08300" d="M184.1 169.8c-7.6 21.6-30.7 32.7-52.3 25.2-21.3-7.5-32.7-30.7-25.2-52.3 5.8-16.6 21.8-27.2 39.2-27.5.2.1.9-.2.8-1.4.1-.2 0-.8-1-1.2-8.4-1.5-17.8-.1-25.9 4-.8-5.6.2-11.6 2.1-17.1l20.1-57.3c7.6-21.6 30.9-32.6 52.3-25.2 21.6 7.6 33.2 30.8 25.7 52.4l-20.1 57.3c-2.8 7.9-8.1 14.4-14.6 19.4 2 7.6 1.6 15.8-1.1 23.7z"/>
                <path fill="#FFF" d="M153.3 146.3c20-13.9 32.1-36.5 32.1-62.3 0-24.7-12-46.6-30.5-60.2-5.8 4.6-10.4 10.9-13.1 18.5l-20.1 57.3c-1.9 5.5-2.9 11.5-2.1 17.1 8.1-4.1 17.5-5.6 25.9-4 1 .3 1.1.9 1 1.2.1 1.2-.5 1.5-.8 1.4-17.4.3-33.3 10.9-39.2 27.5-4.2 12.1-2.5 24.7 3.6 34.8l.5 1.1c1 1.4 4.9 6.8 7.6 8.5 4 4 7.7 6.5 12.8 8.3 5.6 2 11.5 2.5 17.6 1.8 11.4-1.1 18.9-5.1 25.4-11.6 11.3-11.3 14.1-25.6 11.5-37.3-.2-.7-.3-1.4-.5-2.1 0 0 .1 0 .1-.1-1.2-5.1-3.4-10.1-6.6-14.7-6.8 7.9-15 13.4-23.7 17.3-1.5.9-2.8-1.8-1.5-2.5z"/>
                <path fill="#222" d="M110.8 9.3c16.5 0 31.8 5.4 44.1 14.4 7.2-5.7 16.2-9 25.5-9 4.5 0 9.1.8 13.6 2.3 21.6 7.6 33.2 30.8 25.7 52.4l-20.1 57.3c-2.8 7.9-8.1 14.4-14.5 19.3.2.7.3 1.5.5 2.2 1.5 6.9 1 14.3-1.5 21.5-5.6 15.9-19.7 26.2-35.3 27.4-1.7.2-3.5.3-5.2.3-9.3 0-18.4-3.2-25.2-10.4-3.2-2.8-5.9-6-8.1-9.6l-17.1-20.3c-1.3 22.1-19.2 39.2-42.1 39.2-22.6 0-41.8-19.2-41.8-42.6V50.8c0-23.1 19.2-41.5 42.6-41.5h58.9m0-9.3H51.9C23.3 0 0 22.8 0 50.8v103.1c0 13.7 5.4 26.7 15.1 36.6 9.7 9.9 22.5 15.3 36 15.3 20.7 0 38.3-11.6 46.5-28.8l5.1 6.1c2.5 4 5.6 7.7 9.2 10.9 8.1 8.4 19.3 13 31.6 13 2 0 4.1-.1 6.2-.4 19.6-1.6 36.6-14.8 43.1-33.6 2.7-7.7 3.5-15.6 2.5-23.2 6.1-5.7 10.6-12.5 13.1-19.8l20.1-57.3c4.5-12.8 3.6-26.5-2.3-38.6-5.9-12-16.2-21.1-29-25.6-5.4-1.9-11-2.8-16.7-2.8-9 0-17.9 2.5-25.6 7C141.6 4.3 126.5 0 110.8 0z"/>
              </svg> */}
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
            <h3 className="contact-title">Kontakt</h3>
          <section className="contact">
            <img
              src={config.userAvatar}
              className="user-pic"
              alt={config.userName}
            />
            <div className="contact-details">
              <span>Sebastian Fiele</span>
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

          <div className="copyright">
            &copy;
            {new Date().getFullYear()}
            &nbsp;
            {config.userName}
          </div>

        </footer>
      </aside>
    );
  }
}

export default Navigation;
