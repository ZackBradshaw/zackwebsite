import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero is-light is-bol is-fullheight" >
      <div className="padding-top-4em " id="tv">
        <div className="section">
          <div className="container">
            <p className="giant-text retro-font retro-text-shadow has-text-centered">Select your character</p>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="tile is-ancestor">

              <div className="tile is-parent mx-6">
                <Link to="projects" className="tile is-child diagonal-box turtle-color-r">
                  <div className="turtle-text has-text-centered">
                    <p className="giext retro-font has-text-centered">Project</p>
                  </div>
                  <div className="turtle">
                    <img src="assets/projects.png"></img>
                  </div>
                </Link>
              </div>

              <div className="tile is-parent mx-6">
                <Link to="about" className="tile is-child diagonal-box turtle-color-y">
                  <div className="turtle-text has-text-centered">
                    <p className="giext retro-font has-text-centered">About zack</p>
                  </div>
                  <div className="turtle">
                    <img src="assets/about.png"></img>
                  </div>
                </Link>
              </div>

              <div className="tile is-parent mx-6">
                <Link to="gallery" className="tile is-child diagonal-box turtle-color-b">
                  <div className="turtle-text has-text-centered">
                    <p className="giext retro-font has-text-centered">Gallery</p>
                  </div>
                  <div className="turtle">
                    <img src="assets/artgallery.png"></img>
                  </div>
                </Link>
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
