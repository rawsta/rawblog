import React, { useState } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Navigation from "../components/Navigation/Navigation";
import '../../static/assets/css/all.min.css';
import "./index.css";

export default class MainLayout extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <div className="layout_container">
        <Helmet>
          <html lang="de" />
          <meta name="description" content={config.siteDescription} />
          {/* <link rel="shortcut icon" type="image/png" href={favicon} /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Exo+2&family=Lato:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Navigation menuLinks={config.menuLinks} />
        <main id="main-content">{children}</main>
      </div>
    );
  }
}
