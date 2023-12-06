import {
  getWords,
  wordsByCSS, wordsByHTML, wordsByJava, wordsInGeneral
} from '../api/vocabData';
import { showWords } from '../pages/vocab';

const filterBtnsEvents = () => {
  document.querySelector('#css-button').addEventListener('click', () => {
    wordsByCSS().then(showWords);
  });
  document.querySelector('#java-button').addEventListener('click', () => {
    wordsByJava().then(showWords);
  });
  document.querySelector('#html-button').addEventListener('click', () => {
    wordsByHTML().then(showWords);
  });
  document.querySelector('#general-button').addEventListener('click', () => {
    wordsInGeneral().then(showWords);
  });
  document.querySelector('#all-button').addEventListener('click', () => {
    getWords().then(showWords);
  });
};
export default filterBtnsEvents;
