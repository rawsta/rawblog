import React, { Component } from "react";
import { Link } from 'gatsby';
import config from "../../../data/SiteConfig";

class UserInfo extends Component {

  render() {

    return (
      <section className="contact">
        <ul>
          <li>
            Contact
          </li>
          {config.userTwitter && (
            <li>
              <a
                href={`https://twitter.com/${config.userTwitter}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`${config.userTwitter} at Twitter.`}
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
                title={`${config.userGithub} at GitHub.`}
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
                title={`${config.userGithub}'s E-Mail.`}
              >
                <i className="far fa-envelope" aria-hidden="true" />
              </a>
            </li>
          )}
        </ul>
      </section>
    );
  }
}

export default UserInfo;
