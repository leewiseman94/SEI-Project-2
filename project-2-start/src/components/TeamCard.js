import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css'

const TeamCard = ({ team }) => {




  return (
    <div className="column is-one-fifth-desktop is-one-quarter-tablet is-full-mobile">
      <Link to={`/teams/${team.idTeam}`}>
        <div className="card animate__animated animate__bounceInLeft">
          <div className="card-hover">
            <div className="card-image p-5">
              <figure className="image image-is-1by1">
                <img src={team.strTeamBadge} alt={team.strTeam}></img>
              </figure>
            </div>
            <div className="card-header">
              <div className="card-header-title is-centered">{team.strTeam}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TeamCard