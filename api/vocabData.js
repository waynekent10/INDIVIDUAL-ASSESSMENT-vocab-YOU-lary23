import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: Get WORDs
const getWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="uid"&equalTo="${uid}"`, {
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
const wordsByJava = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy"${uid}"&equalTo"${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const category = Object.values(data).filter((item) => item.category === 'Javascript');
      resolve(category);
    })
    .catch(reject);
});

// TODO: FILTER WORDS BY CSS
const wordsByCSS = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy"${uid}"&equalTo"${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const category = Object.values(data).filter((item) => item.category === 'CSS');
      resolve(category);
    })
    .catch(reject);
});

// TODO: FILTER WORDS BY HTML
const wordsByHTML = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy"${uid}"&equalTo"${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const category = Object.values(data).filter((item) => item.category === 'HTML');
      resolve(category);
    })
    .catch(reject);
});

// TODO: FILTER WORDS BY GENERAL TERMS
const wordsInGeneral = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="${uid}"&equalTo"${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const category = Object.values(data).filter((item) => item.category === 'General Term..');
      resolve(category);
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
