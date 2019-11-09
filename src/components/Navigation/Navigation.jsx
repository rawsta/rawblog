import React, { Component } from "react";
import { Link } from "gatsby";
import "./Navigation.css";

class Navigation extends Component {
  
    
  render() {
    const { config } = this.props;
    const title = config.siteTitle;
    const url = config.siteUrl;
    
    return (
      <header className="navigation">
        <span className="kopfzeile">

            <h2>{title}</h2>

        </span>
      </header>
    );
  }
}

export default Navigation;
