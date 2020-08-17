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
            {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, borderRadius: `2em` }}>
              <Image />
            </div> */}
            <div className="tile is-ancestor">
              <div className="tile is-3 is-vertical is-parent">
                <div
                  className="tile is-child has-shadow"
                  style={{ borderRadius: `.5em` }}
                >
                  <Image />
                </div>
                <div className="tile is-child box has-text-centered is-shady">
                  {/* <p className="title">Two</p> */}
                  <p>Nathan Bradshaw, Software Engineer</p>
                  <p>Electronics Hobbyist</p>
                </div>
              </div>

              <div className="tile is-parent is-offset-1 is-7 is-shady box has-background-info-light">
                <div className="tile is-child">
                  <p className="title is-size-1 has-text-dark">Hello Fellow Human, Human Fellas</p>
                  <p className="is-size-4">
                    I am a Student at Brigham Young University... In Idaho, yeah there's one in Idaho. I am working towards a degree in Software Engineering. I really enjoy tinkering with electronics and I try my best to write about them. You can see some of the projects I created in the projects page of this website.
                  </p>
                </div>
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
