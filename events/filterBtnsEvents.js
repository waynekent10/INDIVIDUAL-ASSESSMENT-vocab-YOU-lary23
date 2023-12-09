import {
  getWords,
  wordsByCSS, wordsByHTML, wordsByJava, wordsInGeneral
} from '../api/vocabData';
import { showWords } from '../pages/vocab';

const filterBtnsEvents = (user) => {
  document.querySelector('#all').addEventListener('click', () => {
    getWords(user.uid).then(showWords);
  });
  document.querySelector('#cssBtn').addEventListener('click', () => {
    wordsByCSS(user.uid).then(showWords);
  });
  document.querySelector('#javaBtn').addEventListener('click', () => {
    wordsByJava(user.uid).then(showWords);
  });
  document.querySelector('#htmlBtn').addEventListener('click', () => {
    wordsByHTML(user.uid).then(showWords);
  });
  document.querySelector('#generalBtn').addEventListener('click', () => {
    wordsInGeneral(user.uid).then(showWords);
  });
};

export default filterBtnsEvents;
