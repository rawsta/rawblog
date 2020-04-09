import React, { Component } from "react";
// import Layout from "../layout";
// import SEO from "../components/SEO/SEO";
import config from "../../../data/SiteConfig";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>
          rawBlog &mdash; 
          {' '}
          {config.userName}
        </h1>

        <p>
          Mein Name ist Sebastian Fiele. Auch bekannt als rawsta.
        </p>

      </div>
    );
  }
}

export default About;
