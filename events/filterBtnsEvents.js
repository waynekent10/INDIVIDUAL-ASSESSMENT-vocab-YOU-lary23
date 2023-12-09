import {
  getWords,
  wordsByCSS, wordsByHTML, wordsByJava, wordsInGeneral
} from '../api/vocabData';
import { showWords } from '../pages/vocab';

const filterBtnsEvents = (user) => {
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
  document.querySelector('#allBtn').addEventListener('click', () => {
    console.warn('work do i');
    getWords(user.uid).then(showWords);
  });
};
export default filterBtnsEvents;
