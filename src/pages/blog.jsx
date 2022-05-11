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
        <Helmet title={`Posts – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="title-wrap">
            <h1 className="articles-title">The Blog</h1>
              <span className="count">
                {filterCount}
                {` Posts`}
              </span>
            </div>
          {/* <section className="blog-header">

          </section> */}

          <section className="category-container">
            <div className="cat-pills five-sixths first">
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
            </div>
            <div className="one-sixth search-container">
                <input
                  className="search"
                  type="text"
                  name="searchTerm"
                  value={searchTerm}
                  placeholder="Filter posts..."
                  onChange={this.handleChange}
                />
                <i className="fas fa-search"></i>
              {/* <span className="post-count">
                <span title="Anzahl der Beiträge">
                  {filterCount}
                </span>
                {`Beiträge`}
              </span> */}
            </div>
          </section>

          <PostListing postEdges={filteredPosts} />
        </div>
      </Layout>
    )
  }
}

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
