import React, { useEffect, useState } from 'react'
import TeamCard from './TeamCard'

const TeamsList = ({ leagues, teams }) => {

  const [filteredTeams, setFilteredTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [noneAvailable, setNoneAvailable] = useState(false)
  const [league, setLeague] = useState('all')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')

  useEffect(() => {
    try {
      setFilteredTeams(teams)
    } catch (err) {
      setHasError(true)
    }
    
  }, [teams])

  useEffect(() => {
    if (loading) {
      setLoading(false)
    } else {
      filterTeams()
    }
    
  }, [search, sort, league])

  function filterTeams() {
    const regexSearch = new RegExp(search, 'i') // The i modifier is used to perform case-insensitive matching

    const filteredSorted = teams.filter(team => {
      return (team.idLeague === league || league === 'all') && regexSearch.test(team.strTeam)
    })
    if (filteredSorted.length === 0) {
      setNoneAvailable(true)
    } else {
      setNoneAvailable(false)
    }

    setFilteredTeams(filteredSorted)
  }

  const handleFilter = (event) => {
    setLeague(event.target.value)
  }

  const handleInput = (event) => {
    setSearch(event.target.value)
  }
  

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half-desktop is-full-mobile">
              <h4 className="title is-3 mgb-2">Filter</h4>
              <select className="input" onChange={handleFilter} name="filter" id="filter">
                <option value="all">All</option>
                {leagues.length && leagues.map((league) => {
                  return <option key={league.idLeague} value={league.idLeague}>{league.strLeague}</option>
                })}
              </select>
            </div>
            <div className="column is-half-desktop is-full-mobile has-text-right-desktop has-text-left-desktop">
              <h4 className="title is-3 mgb-2">Search</h4>
              <input className="input" onChange={handleInput}></input>
            </div>
          </div>
          
        </div>
      </section>
      <section className="section">
        <div className="container">
          {filteredTeams.length ? 
            <>
              <h5 className="title is-6">Showing {filteredTeams.length} of {teams.length}</h5>
              <div className="columns is-multiline">
                {filteredTeams.map(team => {
                  return (
                    <TeamCard key={team.idTeam} team={team} />
                  )
                })}
              </div>
            </>
            :
            <div className="has-text-centered"> 
              <h2 className="title is-5">
                {hasError ? 'Something has gone wrong' : noneAvailable ? 'Check spelling' : 'Loading...'}
              </h2>
              
            </div>
          }
        </div>
      </section>
      
    </>
  )
}


export default TeamsList