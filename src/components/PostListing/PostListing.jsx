import React from "react";
import { Link } from "gatsby";
import Img from 'gatsby-image';
import moment from 'moment';

import { formatDate } from '../../utils/global';

class PostListing extends React.Component {

  getPostList() {
    const {postEdges} = this.props;
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
  };

  render() {
    const postList = this.getPostList();
    const CAT_ICON = {
      javascript: <i className="fab fa-js-square"></i>,
      php: <i className="fab fa-php"></i>,
      css3: <i className="fab fa-css3-alt"></i>,
      wordpress: <i className="fab fa-wordpress-simple"></i>,
      typo3: <i className="fab fa-typo3"></i>,
      server: <i className="fas fa-server"></i>,
      linux: <i className="fab fa-linux"></i>,
      windows: <i className="fab fa-windows"></i>,
      cheatsheet: <i className="fas fa-receipt"></i>,
      test: <i className="fab fa-diaspora"></i>,
    };


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
                <span title={post.category}>
                  {CAT_ICON[post.category]}
                </span>
                <div className="post-header">
                  <h2 className="post-title">{post.title}</h2>
                  <span className="post-info">
                    <span>{formatDate(post.date)} </span>
                    {` | `}
                    <span>
                      {`Lesezeit: `}
                      {post.timeToRead}
                      {' Min.'}
                    </span>
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
