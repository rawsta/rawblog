import React, { Component } from "react";
import "./UserLinks.css";

class UserLinks extends Component {
  getLinkElements() {
    const thisProps = this.props;
    const { userLinks } = thisProps.config;
    const { labeled } = thisProps;
    return userLinks.map(link => (
      <a href={link.url} key={link.label}>
        <button type="button" key={link.label}>
          <i className={link.iconClassName} />
          &nbsp;
          {labeled ? link.label : ""}
        </button>
      </a>
    ));
  }

  render() {
    const thisProps = this.props;
    const { userLinks } = thisProps.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user_links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
