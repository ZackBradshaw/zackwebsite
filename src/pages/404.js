import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout className="hero is-light ">
    <SEO title="404: Not found" />
    <section className="hero is-light is-fullheight-with-navbar" >
      <div className="hero-body" id="tv">
        <div className="container" >
          <p className="title is-size-1 retro-font retro-text-shadow ">
            PROGRAM ERROR: <br/> 404 PAGE NOT FOUND
            </p>

        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
