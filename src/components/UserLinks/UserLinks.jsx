import React, { Component } from "react";
import "./UserLinks.css";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <a href={link.url}>
        <button type="button" key={link.label}>
          <i className={link.iconClassName}></i>&nbsp;
          {labeled ? link.label : ""}
        </button>
      </a>
    ));
  }

  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user_links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
