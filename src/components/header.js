// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"

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
      className="navbar is-fixed-to is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand navbar-brand-edit ">
          <div className="navbar-start">
          <Link className="navbar-item center-text is-hidden-mobile" to="/">
            <b>Adventures of <br/> Zack Bradshaw</b>
          </Link>
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
        </div>
        <div className="navbar-end">
        <div
          id="navMenu"
          className={`navbar-menu ${this.state.navBarActiveClass}`}
        >
          <Link
            activeClassName="nav-active" className="navbar-item navbar-item-skew r" to="projects"> 
          <span>Projects</span>
          </Link>
          <Link
            activeClassName="nav-active" to="about" className=" navbar-item  y">
           <span>About</span>
          </Link>
          <Link
            activeClassName="nav-active" to="guides" className=" navbar-item b">
            <span>Gallery</span>
          </Link>
        </div>
        <div className="navbar-end has-text-centered"></div>
      </div>
      </div>
    </nav>

    )
  }
}

export default Header
