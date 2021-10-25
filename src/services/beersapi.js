import axios from 'axios';

export const listAllBeers = () => {
  return axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
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
