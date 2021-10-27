import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import TeamsPage from './components/TeamsPage'

const App = () => {


  
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={TeamsPage} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App