import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TeamsList from './TeamsList'


const TeamsPage = () => {
  const [leagues, setLeagues] = useState([])
  const [teams, setTeams] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer')
        await data.countrys.sort((a, b) => {
          if (a.strDivision > b.strDivision) {
            return 1
          } else if (b.strDivision > a.strDivision) {
            return -1
          } else {
            return 0
          }
        })

        const filteredLeagues = data.countrys.filter(league => league.idLeague !== '4847')
        setLeagues(filteredLeagues)
        let teamsArray = []

        for (let i = 0; i < filteredLeagues.length; i ++) {
          const { data } = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${filteredLeagues[i].idLeague}`)
          teamsArray = [...teamsArray, ...data.teams]
        }
        const sortedTeams = teamsArray.sort((a, b) => {
          if (a.strTeam > b.strTeam) {
            return 1
          } else if (b.strTeam > a.strTeam) {
            return -1
          } else {
            return 0
          }
        })
        setTeams(sortedTeams)

      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  console.log(teams.length)
  return (
    <>
      <section className="hero is-medium is-warning">
        <div className="hero-body title-section pb-6">
          <div className="overlay">
            <h1 className="title is-1 has-text-white has-text-centered">
              Football Teams
            </h1> 
          </div>
        </div>
      </section>
      {!hasError ? 
        <TeamsList leagues={leagues} teams={teams}/>
        :
        hasError ? <h2>Unable to retrieve team data</h2> : <h2>Loading...</h2>
      }
      
    </>
  )
}

export default TeamsPage