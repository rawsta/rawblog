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
              <title>{`${config.siteTitle}`}</title>
            </Helmet>
            <SEO />
            <div className="page-wrap">
              <section className="frontpage">
                <header className="welcome-header">
                  <h1>rawBlog</h1>
                  <span>the playground and incoherent ramblings of Sebastian <em>rawsta</em> Fiele.</span>
                </header>
                <div className="frontpage-main-contentarea-above-postlisting">
                  <p>This site is a long-time under-construction-thingy. Maybe it'll become a real site...or not. Time will tell.</p>
                  <p>This site was last built on:</p>
                  <p>{data.site.buildTime}</p>
                </div>
                <PostListing postEdges={latestPostEdges} />
              </section>
            </div>
            <Footer config={config} />
          </Layout>
        );
    }
}

/* eslint no-undef: "off" */
export const indexQuery = graphql`
query FrontQuery {
    site {
      buildTime(formatString: "DD/MM/YYYY")
    }
    latest: allMarkdownRemark(
        limit: 5
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
