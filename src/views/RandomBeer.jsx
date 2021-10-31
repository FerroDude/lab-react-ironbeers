import React from 'react';
import {loadRandomBeer} from './../services/beersapi'

class RandomBeerView extends React.Component {
constructor() {
  super();
  this.state = {
    beer: []
  }
}

componentDidMount() {
  this.loadRandomBeerDetail();
}

loadRandomBeerDetail = () => {
  loadRandomBeer().then((beer) => {
    this.setState({
      beer
    })
  })
}

render() {
  const { beer } = this.state;
  return (
    (beer && (
      <div className="container">
        <img className="detail-image" src={beer.image} alt="Beer" />
        <div className="detail-name">
          <h1>{beer.name}</h1>
          <h1 className="detail-grey">{beer.attenuation_level}</h1>
        </div>
        <div className="detail-tagline">
           <h3 className="detail-grey">{beer.tagline}</h3>
           <h3>{beer.first_brewed}</h3>
        </div>
        <article className="detail-article">
          <p>{beer.description}</p>
          <p><span className="detail-grey">{beer.contributed_by}</span></p>
        </article>
      </div>
    )) || <h1 className="loading">Loading...</h1>
  );
}
}

export default RandomBeerView;
