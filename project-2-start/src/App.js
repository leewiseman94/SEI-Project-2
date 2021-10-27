import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import FootballTeams from './components/FootballTeams'

const App = () => {


  
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={FootballTeams} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
