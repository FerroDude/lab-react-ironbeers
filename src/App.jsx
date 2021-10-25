import React from 'react';
import { BrowserRouter, Switch, Link, Route, Redirect } from 'react-router-dom';
import BeersView from './views/Beers.jsx';
import RandomBeerView from './views/RandomBeer.jsx';
import HomeView from './views/Home.jsx';
import NewBeerView from './views/NewBeer.jsx';
import Navbar from './components/Navbar.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeView} exact />
        </Switch>

        <Switch>
          <Route
            path="/beers"
            render={(props) => (
              <>
                {' '}
                <Navbar /> <BeersView />{' '}
              </>
            )}
            exact
          />
          <Route
            path="/random-beer"
            render={(props) => (
              <>
                {' '}
                <Navbar /> <RandomBeerView />{' '}
              </>
            )}
            exact
          />
          <Route
            path="/new-beer"
            render={(props) => (
              <>
                {' '}
                <Navbar /> <NewBeerView />{' '}
              </>
            )}
            exact
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
