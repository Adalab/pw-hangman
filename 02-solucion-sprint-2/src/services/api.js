const getWordFromApi = () => {
  return fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/random-word-v1/word.json')
    .then(response => response.json())
    .then(response => {
      return response.word;
    });
};

export default getWordFromApi;
