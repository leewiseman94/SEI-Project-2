import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css'
const Home = () => {

  return (
    <section className="hero is-fullheight is-warning">
      <div className="hero-body">
        <div className="overlay animate__animated animate__bounceInDown">
          <div className="container">
            <h1 className="title is-1 has-text-white">
              Football Teams
            </h1>
            <h2 className="subtitle has-text-white">
              Find out information about a football team
            </h2>
            <Link to="/teams" className="button is-info">Kick Off</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home