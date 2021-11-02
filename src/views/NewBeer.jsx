import React from 'react';
import { addNewBeer } from './../services/beersapi';
import './../new-beer.css';

class NewBeerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: '',
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const type = event.target.type;

    let value =
      type === 'number' ? event.target.valueAsNumber : event.target.value;
    if (Number.isNaN(value)) value = '';
    this.setState({ [name]: value });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      attenuation_level,
      contributed_by,
    } = this.state;
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      attenuation_level,
      contributed_by,
    };
    addNewBeer(newBeer);

    this.setState({
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: '',
    });
  };
  render() {
    return (
      <div>
        <form className="new-beer-form">
          <label htmlFor="input-name">Name</label>
          <input
            id="input-name"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
            required
            type="text"
          />
          <label htmlFor="input-tagline">Tagline</label>
          <input
            id="input-tagline"
            onChange={this.handleChange}
            value={this.state.tagline}
            name="tagline"
            required
            type="text"
          />
          <label htmlFor="input-description">Description</label>
          <textarea
            className="input-description"
            id="input-description"
            onChange={this.handleChange}
            value={this.state.description}
            name="description"
            required
            type="text"
          />
          <label htmlFor="input-first-brewed">First brewed</label>
          <input
            id="input-first-brewed"
            onChange={this.handleChange}
            value={this.state.first_brewed}
            name="first_brewed"
            required
            type="text"
          />
          <label htmlFor="input-brewers-tips">Brewers tips</label>
          <input
            id="input-brewers-tips"
            onChange={this.handleChange}
            value={this.state.brewers_tips}
            name="brewers_tips"
            required
            type="text"
          />
          <label htmlFor="input-attenuation-level">Attenuation level</label>
          <input
            id="input-attenuation-level"
            onChange={this.handleChange}
            value={this.state.attenuation_level}
            name="attenuation_level"
            required
            type="number"
          />
          <label htmlFor="input-contributed-by">Contributed by</label>
          <input
            id="input-contributed-by"
            onChange={this.handleChange}
            value={this.state.contributed_by}
            name="contributed_by"
            required
            type="text"
          />

          <button
            className="btn"
            onClick={this.handleFormSubmission}
            type="button"
          >
            Add New
          </button>
        </form>
      </div>
    );
  }
}

export default NewBeerView;
