import React, { Component } from "react";
import { Follow } from "react-twitter-widgets";

class UserInfo extends Component {
  render() {
    const thisProps = this.props;
    const { userTwitter } = thisProps.config;
    const { expanded } = thisProps;
    return (
      <Follow
        username={userTwitter}
        options={{ count: expanded ? true : "none" }}
      />
    );
  }
}

export default UserInfo;
