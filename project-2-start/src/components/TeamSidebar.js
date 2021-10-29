import React from 'react'
import FaceBookImage from '../images/facebook-logo.png'
import InstagramImage from '../images/instagram-logo.png'
import TwitterImage from '../images/twitter-logo.png'
import YouTubeImage from '../images/youtube-logo.png'

const TeamSidebar = ({ team }) => {

  return (
    <>
      <div className="container">
        <img src={team.strTeamJersey ? team.strTeamJersey : team.strTeamBadge} />
      </div>
      <div className="container">
        <a className="title is-5 has-text-centered" href={`https://${team.strWebsite}`} rel="noreferrer" target="_blank">{team.strWebsite}</a>
      </div>
      <div className="container">
        {team.strFacebook !== '' && <a href={`https://${team.strFacebook}`} rel="noreferrer" target="_blank"><img className="social-media" src={FaceBookImage} /></a>}
        {team.strInstagram !== '' && <a href={`https://${team.strInstagram}`} rel="noreferrer" target="_blank"><img className="social-media" src={InstagramImage} /></a>}
        {team.strTwitter !== '' && <a href={`https://${team.strTwitter}`} rel="noreferrer" target="_blank"><img className="social-media" src={TwitterImage} /></a>}
        {team.strYoutube !== '' && <a href={`https://${team.strYoutube}`} rel="noreferrer" target="_blank"><img className="social-media" src={YouTubeImage} /></a>}
      </div>
      <div className="container stadium has-text-left">
        <h3 className="title is-3">Stadium</h3>
        <h5 className="title is-6">Name: {team.strStadium}</h5>
        <h5 className="title is-6">Location: {team.strStadiumLocation}</h5>
        <h5 className="title is-6">Capacity: {team.intStadiumCapacity}</h5>
        <img src={team.strStadiumThumb}/>
      </div>

      
    </>
  )
}

export default TeamSidebar