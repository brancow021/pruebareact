import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './components/pages/home';
import { Register } from './components/pages/register';
import { Navbar } from './components/ui/Navbar'
import { GlobalStyle } from './globalStyle'



const App = () => {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      
      <Switch>
        <Route 
          exact
          path="/"
          component={Home}
        />

        <Route 
          path="/register"
          component={Register}
        />

        <Redirect
          to="/"
        />
      </Switch>
    </>
  )
};


export default App;
