import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero is-light is-bold is-fullheight">
      <div className="padding-top-4em ">
        <div className="section">
          <div className="container">
<p>RESERVED FOR SVG BS</p>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-parent mx-6">
                <article className="tile is-child diagonal-box">
                  <div className="content-box">
                  </div>
                </article>
              </div>

              <div className="tile is-parent mx-6">
                <article className="tile is-child diagonal-box">
                  <div className="content-box">
                  </div>
                </article>
              </div>
              <div className="tile is-parent mx-6">
                <article className="tile is-child diagonal-box">
                  <div className="content-box">
                    <div className="content">
                      <p> Dick bum balls  Dick bum ballsum balls  Dick bum balls  Dick bum balls  balls  Dick bum balls  Dick bum balls  Dick bum balls  Dick bum balls  Dick bum balls  Dick bum balls  Dick bum balls  Dick bum balls  Dick bum balls  Dick bum balls  Dick bum balls  Dick bum balls  Dick bum balls </p>
                     <div className="turtle">
                      <Image />
                     </div>
                    </div>
                  </div>
                </article>
              </div> 
            </div>

          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const ProjectsQuery = graphql`
  query {
    allFile(filter: {}) {
      edges {
        node {
          childImageSharp {
            fluid(traceSVG: { blackOnWhite: true }) {
              src
            }
          }
        }
      }
    }
  }
`
