import AniLink from "gatsby-plugin-transition-link/AniLink"
// import PropTypes from "prop-types"
import React from "react"
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { Link } from "gatsby"
import Image from "../components/image"


const Footer = ({ siteTitle }) => (
  <footer>
    <section className="hero is-black">
      <div className="container">
        <div className="columns">
          <div className="column no-padding">




            <div class="colmns flex-on-me no-padding">
              <div class="colmn diagonal-box-footer r">
                {/* Second column */}
              </div>
              <div class="clumn diagonal-box-footer y">
                {/* Third column */}
              </div>
              <div class="colmn diagonal-box-footer b">
                {/* Fourth column */}
              </div>
            </div>

          </div>
          <div className="column no-padding">
            <div className="social-icons">
              <ul>
                <li className="push--flat media-buttons">
                  <p href="https://github.com/nathansbradshaw" target="_top" title="Github" className="media-buttons ">
                    <FaGithub />
                  </p>
                </li>
                <li className="push--flat media-buttons">
                  <p href="https://github.com/nathansbradshaw" target="_top" title="Github" className="media-buttons ">
                    <FaGithub />
                  </p>
                </li>
                <li className="push--flat media-buttons">
                  <p href="https://github.com/nathansbradshaw" target="_top" title="Github" className="media-buttons ">
                    <FaGithub />
                  </p>
                </li>
                <li className="push--flat media-buttons">
                  <p href="https://github.com/nathansbradshaw" target="_top" title="Github" className="media-buttons ">
                    <FaGithub />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>


)
export default Footer

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
