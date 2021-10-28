import React from 'react'
import FaceBookImage from '../images/facebook-logo.png'
import InstagramImage from '../images/instagram-logo.png'
import TwitterImage from '../images/twitter-logo.png'
import YouTubeImage from '../images/youtube-logo.png'

const TeamSidebar = ({ team }) => {
  console.log(team)

  return (
    <>
      <div className="container">
        <img src={team.strTeamJersey ? team.strTeamJersey : team.strTeamBadge} />
      </div>
      <div className="container">
        <a className="title is-5 has-text-centered" href={`https://${team.strWebsite}`} rel="noreferrer" target="_blank">{team.strWebsite}</a>
      </div>
      <div className="container">
        {team.strFacebook !== '' && <a href={team.strFacebook}><img className="social-media" src={FaceBookImage} /></a>}
        {team.strInstagram !== '' && <a href={team.strInstagram}><img className="social-media" src={InstagramImage} /></a>}
        {team.strTwitter !== '' && <a href={team.strTwitter}><img className="social-media" src={TwitterImage} /></a>}
        {team.strYoutube !== '' && <a href={team.strYoutube}><img className="social-media" src={YouTubeImage} /></a>}
      </div>
      <div className="container stadium">
        <h3 className="title is-3">Stadium</h3>
        <h5 className="title is-5">Name: {team.strStadium}</h5>
        <img src={team.strStadiumThumb}/>
      </div>

      
    </>
  )
}

export default TeamSidebar