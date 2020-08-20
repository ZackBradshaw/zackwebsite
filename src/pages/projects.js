import React from 'react'
import BlogRoll from '../components/BlogRoll'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GiTrophy } from 'react-icons/gi'


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Projects" />
        <section className="hero is-dark is-bold is-fullheight-with-navbar">
          <div className="section is-medium" id="tv">
            <div className="container">
              <p className="title has-text-centered bo has-text-white mb-6 is-size-1 retro-font retro-text-shadow-small"> <GiTrophy/> Projects</p>
              <section>
                <div className="content">
                  <BlogRoll />
                </div>
              </section>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}