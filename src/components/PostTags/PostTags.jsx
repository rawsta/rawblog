import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        <i className="fas fa-tags" />
        {tags?.map(tag => {
          return <Link
            key={tag}
            style={{ textDecoration: "none" }}
            to={`/tags/${_.kebabCase(tag)}`}
          >
            <span className="single-tag">{tag}</span>
          </Link>;
        })}
      </div>
    );
  }
}

export default PostTags;
