import React, { Component } from 'react';
import { loadBeer } from './../services/beersapi';
import './../detail.css';

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    this.loadBeerDetail();
  }
  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.number !== this.props.match.params.number) {
      this.loadBeerDetail();
    }
  }

  loadBeerDetail() {
    loadBeer(this.props.match.params.beerId).then((beer) => {
      this.setState({ beer });
    });
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

export default DetailView;
