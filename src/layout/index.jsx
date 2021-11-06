import React, { useState } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Navigation from "../components/Navigation/Navigation";
import ThemeContext from '../context/ThemeContext';
import '../../static/assets/css/all.min.css';
import favicon from '../../static/assets/favicon.ico';
import "./index.css";

export default class MainLayout extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => (
          <div className="layout_container">

            <Helmet>
              <html lang="de" data-theme={theme.dark ? 'dark' : 'light'} />
              <meta name="description" content={config.siteDescription} />
              <link rel="shortcut icon" type="image/png" href={favicon} />
              <link
                href="https://fonts.googleapis.com/css?family=Exo+2:wght@400;700;900&family=Lato:wght@400;700&display=swap"
                rel="stylesheet"
              />
              <base href="/" />
            </Helmet>

            <Navigation menuLinks={config.menuLinks} />

            <main id="main-content">
              {children}
            </main>

          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
