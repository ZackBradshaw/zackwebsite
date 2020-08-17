import React from 'react'
import BlogRoll from '../components/BlogRoll'
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
      {/* <React.Fragment> */}
      <section className="hero is-dark is-bold is-fullheight-with-navbar">
      <div className="section is-medium">
        <div className="container">
        <p className="title has-text-centered box has-text-dark has-background-info-light">Welcome to My Projects Page! </p>
        <section>
          <div className="content">
            <BlogRoll />
          </div>
          </section>
          </div>
          </div>
        </section>
      {/* </React.Fragment> */}
      </Layout>
    )
  }
}