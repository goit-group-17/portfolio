import axios from 'axios';

const URL = `https://portfolio-js.b.goit.study/api/reviewsd`;

export async function fetchPortfolio() {
  return await axios
    .get(URL)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
}
