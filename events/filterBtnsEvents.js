import {
  getWords,
  wordsByCSS, wordsByHTML, wordsByJava, wordsInGeneral
} from '../api/vocabData';
import { showWords } from '../pages/vocab';

const filterBtnsEvents = (user) => {
  document.querySelector('#cssBtn').addEventListener('click', () => {
    wordsByCSS(user).then(showWords);
  });
  document.querySelector('#javaBtn').addEventListener('click', () => {
    wordsByJava(user).then(showWords);
  });
  document.querySelector('#htmlBtn').addEventListener('click', () => {
    wordsByHTML(user).then(showWords);
  });
  document.querySelector('#generalBtn').addEventListener('click', () => {
    wordsInGeneral(user).then(showWords);
  });
  document.querySelector('#allBtn').addEventListener('click', () => {
    console.warn('work do i');
    getWords(user).then(showWords);
  });
};
export default filterBtnsEvents;
