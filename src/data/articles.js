// Example of getting data from external API
const axios = require('axios');

module.exports = async () => {
  const result = await axios.get('http://139.59.187.41/ak-articles');
  console.log(result.data);
  return result.data;
};
