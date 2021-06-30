import React from 'react'
import './App.css'
import { BrowserRouter as Switch, Route, Link, Redirect, MemoryRouter } from 'react-router-dom'
import * as Pages from './pages'

function App() {

  return (
    <MemoryRouter>
    {/* Links */}
      <Link className='router-link' to='/pages/Home'></Link>
      <Link className='router-link' to='/pages/DevEnv'></Link>

      {/*  */}
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/pages/Home" />}
        />
        <Route path='/pages/Home' component={() => <Pages.Home />} />
        <Route path='/pages/DevEnv' component={() => <Pages.DevEnv />} />
      </Switch>
    </MemoryRouter>
  );
}

export default App;