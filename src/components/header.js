// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top is-primary is-info"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <AniLink
              className="navbar-item"
              paintDrip
              to="/"
              hex="#62727b"
              duration={0.7}
            >
              <b>Nathan Bradshaw</b>
            </AniLink>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
            duration={0.7}
          >
            <AniLink
              activeClassName="nav-active"
              className="navbar-item is-shady-nav dark-nav"
              paintDrip
              to="/"
              hex="#62727b"
              duration={0.7}
            >
              Home
            </AniLink>
            <AniLink
              activeClassName="nav-active"
              paintDrip
              to="projects"
              hex="#37474f"
              duration={0.6}
              className=" navbar-item is-shady-nav "
            >
              Projects
            </AniLink>
            {/* <AniLink
              activeClassName="nav-active"
              paintDrip
              to="guides"
              hex="#37474f"
              duration={0.6}
              className=" navbar-item is-shady-nav "
            >
              Guides
            </AniLink> */}
          </div>
          <div className="navbar-end has-text-centered"></div>
        </div>
      </nav>
    )
  }
}

export default Header
