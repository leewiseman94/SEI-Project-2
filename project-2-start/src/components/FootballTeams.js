import React, { useEffect, useState } from 'react'
import axios from 'axios'


const FootballTeams = () => {
  const [leagues, setLeagues] = useState([])
  const [teams, setTeams] = useState([])
  const [filteredTeams, setFilteredTeams] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer')
        data.countrys.sort((a, b) => {
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
        const teamsArray = []

        filteredLeagues.forEach(league => {
          const getTeamData = async () => {
            const { data } = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${league.idLeague}`)
            data.teams.forEach(team => {
              teamsArray.push(team)
            })
          }

          getTeamData()
        })
        setTeams(teamsArray)
        setFilteredTeams(teamsArray)

      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  
  const handleFilter = (event) => {
    console.log(event.target.value)
    const filter = teams.filter(team => team.idLeague === event.target.value || event.target.value === 'all')
    console.log(filter)  

  }

  console.log(leagues)
  console.log(teams)
  console.log(hasError)
  return (
    <>
      <section className="hero is-medium is-warning">
        <div className="hero-body title-section pb-6">
          <div className="overlay">
            <h1 className="title has-text-white has-text-centered">
              Football Teams
            </h1> 
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third-desktop is-full-mobile">
              <select onChange={handleFilter} name="filter" id="filter">
                <option value="all">All</option>
                {leagues.length && leagues.map((league) => {
                  return <option key={league.idLeague} value={league.idLeague}>{league.strLeague}</option>
                })}
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FootballTeams