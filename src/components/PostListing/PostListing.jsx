import React from "react";
import { Link } from "gatsby";
// import Img from 'gatsby-image';
// import moment from 'moment';

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
      javascript: <i className="fab fa-js-square" />,
      php: <i className="fab fa-php" />,
      css3: <i className="fab fa-css3-alt" />,
      wordpress: <i className="fab fa-wordpress-simple" />,
      typo3: <i className="fab fa-typo3" />,
      server: <i className="fas fa-server" />,
      linux: <i className="fab fa-linux" />,
      windows: <i className="fab fa-windows" />,
      cheatsheet: <i className="fas fa-receipt" />,
      test: <i className="fab fa-diaspora" />,
    };

              // <div className="post-item-img">
              //   <img
              //     src={post.cover}
              //     className="title-img"
              //     alt={post.title}
              //   />
              // </div>

    return (
      <section className="post-list">
        {postList.map(post => (

          <Link to={post.path} key={post.title}>
            <article className="post-item" style={{backgroundImage: `url(${post.cover})`}}>
              <header className="post-item-content">
                <span title={post.category}>
                  {CAT_ICON[post.category]}
                </span>
                <div className="post-header">
                  <h2 className="post-title">{post.title}</h2>
                  <span title="Beitragsdatum">
                    <i className="far fa-calendar-alt" />
                    {` `}
                    {formatDate(post.date)}
                  </span>
                  <span title="Grob geschätzte Lesezeit">
                    {` | `}
                    <i className="far fa-clock" />
                    {` `}
                    {post.timeToRead}
                    {' Min.'}
                  </span>
                </div>
              </header>
            </article>
          </Link>
        ))}
      </section>
    );
  }
}

export default PostListing;
