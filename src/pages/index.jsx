import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from '../components/PostListing/PostListing';
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class Index extends React.Component {

    render() {
        const { data } = this.props;
        const latestPostEdges = data.latest.edges

        return (
          <Layout>
            <Helmet>
              <title>{`${config.siteTitle} | Sebastian Fiele`}</title>
            </Helmet>
            <SEO />
            <div className="page-wrap">
              <section className="frontpage">
                <header className="welcome-header">
                  <h1>Sebastian rawsta Fiele</h1>
                </header>
                <div className="frontpage-main-contentarea-above-postlisting">
                  Hier kommt noch richtiger Inhalt hin.
                </div>
                <PostListing postEdges={latestPostEdges} />
                <hr />
                <Footer config={config} />
              </section>
            </div>
          </Layout>
        );
    }
}

/* eslint no-undef: "off" */
export const indexQuery = graphql`
query FrontQuery {
    latest: allMarkdownRemark(
        limit: 3
        sort: { fields: [fields___date], order: DESC }
        filter: { frontmatter: { template: { eq: "post" } } }
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
                    title
                    tags
                    category
                    cover
                    date
                    template
                }
            }
        }
    }
}
`;
