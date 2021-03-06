import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./listing.css";

class Listing extends React.Component {
  renderPaging() {
    const thisProps = this.props;
    const { currentPageNum, pageCount } = thisProps.pageContext;
    const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
    const nextPage = `/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <div className="paging-container">
        {!isFirstPage && <Link to={prevPage}>Vorherige</Link>}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? "/" : `/${pageNum}/`}
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage}>Nächste</Link>}
      </div>
    );
  }

  render() {
    const thisProps = this.props;
    const propsData = thisProps.data;
    const postEdges = propsData.allMarkdownRemark.edges;

    return (
      <Layout>
        <div className="posts-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} />
        </div>
        {this.renderPaging()}
      </Layout>
    );
  }
}

export default Listing;

/* eslint no-undef: "off" */
// GatsbyImageSharpFluid
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark (
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            template
            cover
            title
            date
            category
            tags
          }
        }
      }
    }
  }
`;
