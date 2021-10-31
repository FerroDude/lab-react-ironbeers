import React from 'react';
import { BrowserRouter, Switch, Link, Route, Redirect } from 'react-router-dom';
import BeersView from './views/Beers.jsx';
import RandomBeerView from './views/RandomBeer.jsx';
import HomeView from './views/Home.jsx';
import NewBeerView from './views/NewBeer.jsx';
import Navbar from './components/Navbar.jsx';
import DetailView from './views/Detail.jsx';
import './App.css';

//test new machine commit

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeView} exact />
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
                <Navbar /> <NewBeerView />
              </>
            )}
            exact
          />
          <Route
            path="/beers/:beerId"
            render={(props) => (
              <>
                <Navbar /> <DetailView {...props} />{' '}
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
