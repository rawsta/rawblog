import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Navigation from "../components/Navigation/Navigation";
import '../../static/assets/css/all.min.css'
import "./index.css";

export default class MainLayout extends React.Component {

    render() {
        const { children } = this.props;

    return (
      <div className="layout_container">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Exo+2&family=Lato:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content={config.siteDescription} />
          <html lang="de" />
        </Helmet>
        <Navigation/>
       <main id="main-content">{children}</main>
      </div>
    );
  }
}
