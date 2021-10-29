import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'


const TeamMain = ({ team }) => {
  
  const teamId = useParams()
  const [fixtures, setFixtures] = useState([])
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [detailsLoaded, setDetailsLoaded] = useState(false)
  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data: { results } } = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${teamId.id}`)
        setFixtures(results)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    if (loading) {
      setLoading(false)
    } else {
      setDetailsLoaded(true)
    }
  },[fixtures])


  return (
    <>
      <section className="section main-section">
        <Link to="/">Home</Link> / <Link to="/teams">Teams</Link> / {team.strTeam}
      </section>
      {detailsLoaded &&
      <>
        {!hasError &&
        <section className="section main-section">
          <h2 className="title is-3">Previous Home Results</h2>
          {fixtures.map(fixture => {
            return (
              (fixture.strStatus === 'Match Finished' || fixture.strStatus === '2H') &&
                <div key={fixture.idEvent} className="container has-background-grey-lighter m-2 p-2 has-text-centered">
                  <h5 className="title is-5">
                    {fixture.strHomeTeam} {fixture.intHomeScore} - {fixture.intAwayScore} {fixture.strAwayTeam}
                  </h5>
                </div>
            )
          })}
        </section>
        }
        <section className="section main-section">
          <h2 className="title is-3">Description</h2>
          <p className="description">{team.strDescriptionEN}</p>
        </section>
        {team.strTeamFanart1 &&
        <section className="section main-section">
          <h2 className="title is-3">Fan Art</h2>
          <img className="fanart" src={team.strTeamFanart1} />
          <img className="fanart" src={team.strTeamFanart2} />
          <img className="fanart" src={team.strTeamFanart3} />
          <img className="fanart" src={team.strTeamFanart4} />
        </section>
        }
      </>
      }
    </>
    
  )
}

export default TeamMain