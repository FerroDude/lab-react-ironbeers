import axios from 'axios';

import { Redirect } from 'react-router-dom';

export const listAllBeers = () => {
  return axios
    .get('https://ih-beers-api2.herokuapp.com/beers/')
    .then((response) => {
      const data = response.data;
      const list = data.map((beer) => {
        return {
          image: beer.image_url,
          name: beer.name,
          tagline: beer.tagline,
          contributed_by: beer.contributed_by,
          id: beer._id,
        };
      });
      return list;
    });
};

export const loadBeer = (id) => {
  return axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then((response) => {
      const data = response.data;
      const beer = {
        image: data.image_url,
        name: data.name,
        tagline: data.tagline,
        first_brewed: data.first_brewed,
        description: data.description,
        contributed_by: data.contributed_by,
        attenuation_level: data.attenuation_level,
      };
      return beer;
    });
};

export const loadRandomBeer = () => {
  return axios
    .get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then((response) => {
      const data = response.data;
      const randomBeer = {
        image: data.image_url,
        name: data.name,
        tagline: data.tagline,
        first_brewed: data.first_brewed,
        description: data.description,
        contributed_by: data.contributed_by,
        attenuation_level: data.attenuation_level,
      };
      return randomBeer;
    });
};

export const addNewBeer = (beer) => {
  return axios
    .post('https://ih-beers-api2.herokuapp.com/beers/new', beer)
    .then((response) => {
      console.log(response);
      alert(response.data);
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
};
