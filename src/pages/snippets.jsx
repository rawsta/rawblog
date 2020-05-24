import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import CodeListing from '../components/CodeListing/CodeListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

export default class SnippetPage extends Component {
  state = {
    searchTerm: '',
    snippets: this.props.data.posts.edges,
    filteredSnippets: this.props.data.posts.edges,
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value }, () => this.filterPosts())
  }

  filterPosts = () => {
    const { snippets, searchTerm } = this.state

    const filteredSnippets = snippets.filter(post =>
      post.node.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    this.setState({ filteredSnippets })
  }

  render() {
    const { filteredSnippets, searchTerm } = this.state
    const filterCount = filteredSnippets.length
    const tags = this.props.data.tag.group

    return (
      <Layout>
        <Helmet title={`Snippets – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="title-wrap">
            <h1 className="articles-title">Snippets</h1>
              <span className="count">
                {filterCount}
                {` Snippets`}
              </span>
            </div>

          <section className="category-container">
            <div className="cat-pills five-sixths first">
            {/* {categories.map(category => {
              return (
                <Link
                  to={`/categories/${category.fieldValue.toLowerCase()}`}
                  className="category-filter"
                  key={category.fieldValue}
                >
                  {category.fieldValue}
                </Link>
              )
            })} */}
            </div>
            <div className="one-sixth search-container">
                <input
                  className="search"
                  type="text"
                  name="searchTerm"
                  value={searchTerm}
                  placeholder="Snippets filtern..."
                  onChange={this.handleChange}
                />
                <i className="fas fa-search"></i>
            </div>
          </section>


          <CodeListing codeEdges={filteredSnippets} />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query SnippetsQuery {
    posts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "snippet" } } }
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
            cover
            date
          }
        }
      }
    }
    tag: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
