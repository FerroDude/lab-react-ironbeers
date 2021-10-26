import './../beers.css';
import React from 'react';
import { listAllBeers } from './../services/beersapi';
import { Link } from 'react-router-dom';
class BeersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    listAllBeers()
      .then((list) => {
        this.setState({ list });
      })
      .catch((error) => {
        console.log(error);
        alert('Something went wrong loading the list of beers');
      });
  }

  render() {
    return (
      <div className="container">
        <ul>
          {this.state.list.map((beer) => {
            return (
              <li className="individual-beer" key={beer.id}>
                <img className="list-image" src={beer.image} alt="beer" />
                <div className="beer-info">
                  <Link to={`/beers/${beer.id}`}>
                    <h1>{beer.name}</h1>
                  </Link>

                  <h2>
                    <em>{beer.tagline}</em>
                  </h2>
                  <p>Made by: {beer.contributed_by}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BeersView;
