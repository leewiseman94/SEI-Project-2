import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({ team }) => {


  return (
    <div className="column is-one-fifth-desktop is-one-quarter-tablet is-full-mobile">
      <Link to={`/teams/${team.idTeam}`}>
        <div className="card">
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={team.strTeamBadge} alt={team.strTeam}></img>
            </figure>
          </div>
          <div className="card-header">
            <div className="card-header-title is-centered">{team.strTeam}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TeamCard