import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const thisProps = this.props;
    const { tag } = thisProps.pageContext;
    const postEdges = thisProps.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <span className="tag_container">
          <Helmet title={`Beiträge markiert als "${tag}" | ${config.siteTitle}`} />
          <PostListing postEdges={postEdges} />
        </span>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            template
            cover
            category
            date
          }
        }
      }
    }
  }
`;
