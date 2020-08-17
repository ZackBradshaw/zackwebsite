import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-full" key={post.id}>
              <article
                className={`blog-list-item tile is-child box has-background-info is-shady is-12 ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                    <Link
                      className="title has-text-white-bis is-size-1 mb-0"
                      to={post.frontmatter.path}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block px-4 pt-1">
                      {post.frontmatter.date}
                    </span>

                <p className="has-text-grey-lighter px-5">
                  {post.excerpt}
                  </p>
                  <Link className="button has-background-primary is-shady has-text-white no-outline" to={post.frontmatter.path}>
                    Keep Reading →
                  </Link>

              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)