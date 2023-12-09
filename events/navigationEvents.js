// import { getWords } from '../api/vocabData';
// import { showWords } from '../pages/vocab';
import addWordForm from '../components/form/addWordForm';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
// LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // HOME PAGE
  // document.querySelector('#home').addEventListener('click', () => {
  //   getWords(user).then(showWords);
  // });
  // CREATE WORD
  document.querySelector('#createEntry').addEventListener('click', () => {
    addWordForm({}, user);
  });
};

export default navigationEvents;
