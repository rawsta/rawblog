import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class PageTemplate extends React.Component {

  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.markdownRemark
    const page = postNode.frontmatter

    if (!page.id) {
      page.id = slug;
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${page.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="page-wrap">
          <article className="page-single">
            <header className="page-header">
              <h1>{page.title}</h1>
            </header>
            <div className="page" dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <Footer config={config} />
          </article>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        template
      }
      fields {
        slug
        date
      }
    }
  }
`;
