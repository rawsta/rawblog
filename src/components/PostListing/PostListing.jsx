import React from "react";
import { Link } from "gatsby";
import Img from 'gatsby-image'
import moment from 'moment';

import { formatDate } from '../../utils/global';

class PostListing extends React.Component {
  getPostList() {
    const {postEdges} = this.props;
    // this.props.postEdges.forEach(postEdge => {
    const postList = [];
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        category: postEdge.node.frontmatter.category,
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
      <section className="post-list">
        {postList.map(post => (
          <Link to={post.path} key={post.title}>
            <article className="post-item">
              <div className="post-item-img">
                <img
                  src={post.cover}
                  className="title-img"
                  alt={post.title}
                />
              </div>
              <div className="post-item-content">
                <h2 className="post-title">{post.title}</h2>
                <div className="post-info">
                  <span>{formatDate(post.date)} </span>
                  {` | `}
                  <span>
                    {`Lesezeit: `}
                    {post.timeToRead}
                    {' '}
                    Min.
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>
    );
  }
}

export default PostListing;
