import AniLink from "gatsby-plugin-transition-link/AniLink"
// import PropTypes from "prop-types"
import React from "react"
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = ({ siteTitle }) => (
  <footer>
    <section className="hero is-black">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title">Nathan Bradshaw</h1>
              <h2 className="subtitle"></h2>
              <p>
                © {new Date().getFullYear()}
                {` `}
                <AniLink to="/" paintDrip hex="#62727b" duration={0.7}>
                  UnitedCode/Nate
                </AniLink>
              </p>
            </div>
            <div className="column">
            <div className="social-icons">
            <ul>
                <li>
                    <a href="https://github.com/nathansbradshaw" target="_top" title="Github">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="coming-soon" target="_top" title="Linkedin">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/teh_pinto/" target="_top" title="Instagram">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
)
export default Footer
