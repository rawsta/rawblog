import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

export default class BlogPage extends Component {
  state = {
    searchTerm: '',
    posts: this.props.data.posts.edges,
    filteredPosts: this.props.data.posts.edges,
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value }, () => this.filterPosts())
  }

  filterPosts = () => {
    const { posts, searchTerm } = this.state

    const filteredPosts = posts.filter(post =>
      post.node.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    this.setState({ filteredPosts })
  }

  render() {
    const { filteredPosts, searchTerm } = this.state
    const filterCount = filteredPosts.length
    const categories = this.props.data.category.group

    return (
      <Layout>
        <Helmet title={`Beiträge – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <h1 className="articles-title">rawsta's Beiträge</h1>

          <section className="blog-header">
            <p>
              {`Es gibt aktuell `}
              {filterCount}
              {` Beiträge`}
            </p>
            <div className="search-container">
              <input
                className="search"
                type="text"
                name="searchTerm"
                value={searchTerm}
                placeholder="Beiträge filtern..."
                onChange={this.handleChange}
              />
              <i className="fas fa-search"></i>
            </div>
          </section>

          <section className="category-container">
            {categories.map(category => {
              return (
                <Link
                  to={`/categories/${category.fieldValue.toLowerCase()}`}
                  className="category-filter"
                  key={category.fieldValue}
                >
                  {category.fieldValue}
                </Link>
              )
            })}
          </section>

          <PostListing postEdges={filteredPosts} />
        </div>
      </Layout>
    )
  }
}

    //   filter: { frontmatter: { template: { eq: "post" } } }
export const pageQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 180)
          timeToRead
          frontmatter {
            title
            tags
            category
            cover
            date
          }
        }
      }
    }
    category: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
