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
      (this.state.beer && (
        <div className="container">
          <img className="detail-image" src={beer.image} alt="Beer" />
          <article className="article">
            <h1>{beer.name}</h1>
            <h4>{beer.description}</h4>
          </article>
        </div>
      )) || <h1 className="loading">Loading...</h1>
    );
  }
}

export default DetailView;
