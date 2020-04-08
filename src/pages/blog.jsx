import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

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
    const categories = this.props.data.categories.group

    return (
      <Layout>
        <Helmet title={`Articles – ${config.siteTitle}`} />
        <SEO />
        <div className="gradient-section articles">
          <div className="container">
            <h2 className="text-center">The Missing Instruction Manuals of the Web</h2>
            <div className="instruction-manuals">
              {manuals.map(manual => (
                <Link to={manual.url}>
                  <img src={manual.image} alt={manual.name} />
                  <h3>{manual.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="articles-title">Articles</h1>
          <div className="category-container">
            {categories.map(category => {
              return (
                <Link
                  to={`categories/${category.fieldValue.toLowerCase()}`}
                  className="category-filter"
                  key={category.fieldValue}
                >
                  {category.fieldValue}
                </Link>
              )
            })}
          </div>
          <div className="search-container">
            <input
              className="search"
              type="text"
              name="searchTerm"
              value={searchTerm}
              placeholder="Type here to filter posts..."
              onChange={this.handleChange}
            />
            <div className="filter-count">{filterCount}</div>
          </div>
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