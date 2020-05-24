import React from "react";
import { Link } from "gatsby";
import Img from 'gatsby-image';
// import moment from 'moment';

import { formatDate } from '../../utils/global';

class CodeListing extends React.Component {

  getCodeList() {
    const {codeEdges} = this.props;
    const codeList = [];
    codeEdges.forEach(codeEdge => {
      codeList.push({
        path: codeEdge.node.fields.slug,
        tags: codeEdge.node.frontmatter.tags,
        cover: codeEdge.node.frontmatter.cover,
        title: codeEdge.node.frontmatter.title,
        date: codeEdge.node.fields.date,
        excerpt: codeEdge.node.excerpt,
        timeToRead: codeEdge.node.timeToRead
      });
    });
    return codeList;
  };

  render() {
    const codeList = this.getCodeList();
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


    return (
      <section className="post-list">
        {codeList.map(code => (

          <Link to={code.path} key={code.title}>
            <article className="post-item">
              <div className="post-item-img">
                <img
                  src={code.cover}
                  className="title-img"
                  alt={code.title}
                />
              </div>
              <header className="post-item-content">
                <div className="post-header">
                  <h2 className="post-title">{code.title}</h2>
                  <span title="Beitragsdatum">
                    <i className="far fa-calendar-alt" />
                    {` `}
                    {formatDate(code.date)}
                  </span>
                  <span title="Grob geschätzte Lesezeit">
                    {` | `}
                    <i className="fas fa-code" />
                    {` `}
                    {code.tags}
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

export default CodeListing;
