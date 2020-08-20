import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { FaFileCode } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-full has-flex-wrap" key={post.id}>
              <div class="arrow-right"></div>

              <article
                className={`blog-list-item tile is-child box is-shady is-10 achievement-items ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
              >
                <div className="columns">
                  <div className="column is-2 ">
                    <FaFileCode className="big-icon" />
                  </div>
                  <div className="column ">

                    <Link
                      className="title has-text-white-bis is-size-1 mb-0 retro-font retro-text-shadow-small"
                      to={post.frontmatter.path}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block px-4 pt-1 retro-font">
                      {post.frontmatter.date}
                    </span>

                    <p className="has-text-grey-lighter px-5 retro-font">
                      {post.excerpt}
                    </p>
                    <Link className="button has-background-primary is-shady has-text-white no-outline retro-font" to={post.frontmatter.path}>
                      Keep Reading <FaArrowRight/>
                  </Link>

                  </div>
                </div>
              </article>
              <div class="arrow-left"></div>

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