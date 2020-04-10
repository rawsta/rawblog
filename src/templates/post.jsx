import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

import { formatDate } from '../utils/global';

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    const date = formatDate(post.date);
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
    let cover;

    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    if (post.cover) {
      cover = post.cover;
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="post-wrap">
          <article className="post-single">
            {cover && (
              <div className="page-cover-image">
                <img
                  src={cover}
                  className="title-img"
                  alt={post.title}
                />
              </div>
            )}
            <header className="post-header">
              <span title={post.category}>
                {CAT_ICON[post.category]}
              </span>
              <h2>{post.title}</h2>
              <div className="post-info">
                <p>{date}</p>
              </div>
            </header>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <span className="post-meta">
              <PostTags
                tags={post.tags}
              />
              <UserInfo
                config={config}
              />
            </span>
            <Footer config={config} />
          </article>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        template
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
