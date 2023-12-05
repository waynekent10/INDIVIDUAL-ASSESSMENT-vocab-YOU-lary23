import { getWords } from '../api/vocabData';
import { showWords } from '../pages/vocab';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
// LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // HOME PAGE
  document.querySelector('#home').addEventListener('click', () => {
    getWords().then(showWords);
  });
};

export default navigationEvents;
