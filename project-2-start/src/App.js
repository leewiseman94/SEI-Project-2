import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import TeamDetails from './components/TeamDetails'
import TeamsPage from './components/TeamsPage'

const App = () => {


  
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={TeamsPage} />
          <Route exact path="/teams/:id" component={TeamDetails} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
