import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <section className="hero is-fullheight is-warning">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-white">
            Football Teams
          </h1>
          <h2 className="subtitle has-text-white">
            Find out information about a football team
          </h2>
          <Link to="/teams" className="button is-info">Get Started</Link>
        </div>
      </div>
    </section>
  )
}

export default Home