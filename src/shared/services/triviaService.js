const REQUEST_URL = 
  "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple";

  export const fetchQuestions = async () => {
    return fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((data) => data['results'].map(el => {
      return {
        ...el,
        answered: false
      }
    }))
    .catch(function () {
      console.log("ERROR");
    });
  }