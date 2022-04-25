const getWordFromApi = () => {
  return fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
    .then(response => response.json())
    .then(response => {
      return response.body.Word;
    });
};

export default getWordFromApi;
