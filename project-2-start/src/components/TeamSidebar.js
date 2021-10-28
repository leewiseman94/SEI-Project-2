import React from 'react'

const TeamSidebar = ({ team }) => {
  console.log(team)

  return (
    <>
      <img src={team.strTeamJersey ? team.strTeamJersey : team.strTeamBadge} />
      <a className="has-text-centered" href={`https://${team.strWebsite}`} rel="noreferrer" target="_blank">{team.strWebsite}</a>
    </>
  )
}

export default TeamSidebar