import {
  getWords,
  wordsByCSS, wordsByHTML, wordsByJava, wordsInGeneral
} from '../api/vocabData';
import { showWords } from '../pages/vocab';

const filterBtnsEvents = () => {
  document.querySelector('#cssBtn').addEventListener('click', () => {
    wordsByCSS().then(showWords);
  });
  document.querySelector('#javaBtn').addEventListener('click', () => {
    wordsByJava().then(showWords);
  });
  document.querySelector('#htmlBtn').addEventListener('click', () => {
    wordsByHTML().then(showWords);
  });
  document.querySelector('#generalBtn').addEventListener('click', () => {
    wordsInGeneral().then(showWords);
  });
  document.querySelector('#allBtn').addEventListener('click', () => {
    getWords().then(showWords);
  });
};
export default filterBtnsEvents;
