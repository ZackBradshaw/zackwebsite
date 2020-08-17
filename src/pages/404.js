import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="hero is-light is-bold is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <p className="title is-size-1">
            Error: 404 PAGE NOT FOUND
            </p>
          <p className="subtitle">
            We are sorry that this route is not available.
            <br />
              We hope that you can use the navbar to find pages that do exist
            </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
