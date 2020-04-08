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
        shortdate: postEdge.node.frontmatter.date,
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
      <div className="post-list">
        {postList.map(post => (
          <Link to={post.path} key={post.title}>
            <article className="post-item">
              <img
                src={post.cover}
                className="title-img"
                alt={post.title}
              />
              <h2 className="post-title">{post.title}</h2>
              <div className="post-info">
                <span>{post.shortdate}</span>
                <span>{`Lesezeit: `}{post.timeToRead} Min.</span>

              </div>
            </article>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;
