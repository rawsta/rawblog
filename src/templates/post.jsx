import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from 'gatsby-image'
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
// import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="post-wrap">
          <article className="post-single">
            {post.cover && (
              <div className="page-cover-image">
                <figure>
                  <Img
                    className="page-image"
                    key={post.cover.childImageSharp.src}
                    fluid={post.cover.childImageSharp}
                  />
                </figure>
              </div>
            )}
            <h2>{post.title}</h2>
            <div className="post-info">
              <p>
                {post.date}
                in
                {post.category}
              </p>
            </div>
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
