import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <section className="hero is-light is-fullheight">
        <div className="section is-medium" id="tv">
          <div className="container" >
            <div className="blog-post-container" >
              <div className="blog-post">
                <div className="title is-1 has-text-centered box retro-font has-background-info has-shadow">
                  <p >{frontmatter.title}</p>
                  <p className="subtitle">{frontmatter.date}</p>
                </div>

                <div
                  className="blog-post-content has-text-white is-size-5 px-6 py-5"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`