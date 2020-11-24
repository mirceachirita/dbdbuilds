import axios from 'axios';

const perksEndPoint = 'http://localhost:3000/perksTest';

const getAllPerks = async () => {
  const result = {};

  await axios.get(perksEndPoint)
    .then((response) => {
      result.perks = response.data;
    }).catch((error) => {
      result.errored = true;
      console.log(error);
    });

  return result;
};

export { getAllPerks };
