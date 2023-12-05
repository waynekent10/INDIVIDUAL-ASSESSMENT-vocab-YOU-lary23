import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: Get WORDs
const getWords = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// TODO: CREATE WORDS
const createWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: GET Single WORD
const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: DELETE Word
const deleteSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: UPDATE Word
const updateWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: FILTER WORDS BY JS
const wordsByJava = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="category"&equalTo="Javascript"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const categoryJS = Object.values(data).filter((item) => item.category);
      resolve(categoryJS);
    })
    .catch(reject);
});

// TODO: FILTER WORDS BY CSS
const wordsByCSS = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="category"&equalTo="CSS"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const categoryCSS = Object.values(data).filter((item) => item.category);
      resolve(categoryCSS);
    })
    .catch(reject);
});

// TODO: FILTER WORDS BY HTML
const wordsByHTML = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="category"&equalTo="HTML"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const categoryHTML = Object.values(data).filter((item) => item.category);
      resolve(categoryHTML);
    })
    .catch(reject);
});

// TODO: FILTER WORDS BY GENERAL TERMS
const wordsInGeneral = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="category"&equalTo="General Term..`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const categoryHTML = Object.values(data).filter((item) => item.category);
      resolve(categoryHTML);
    })
    .catch(reject);
});

export {
  getWords,
  createWord,
  getSingleWord,
  deleteSingleWord,
  updateWord,
  wordsByCSS,
  wordsByHTML,
  wordsByJava,
  wordsInGeneral
};
