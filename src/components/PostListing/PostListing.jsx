import React from "react";
import { Link } from "gatsby";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    const {postEdges} = this.props;
    // this.props.postEdges.forEach(postEdge => {
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div className="post_-list">
        {postList.map(post => (
          <Link to={post.path} key={post.title}>
            <img
              src={post.cover}
              className="logo-small"
              alt={post.title}
            />
            <h2 className="post-title">{post.title}</h2>
            <span className="post-info">
              {post.timeToRead}
              &mdash;
              {post.date}
            </span>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;
