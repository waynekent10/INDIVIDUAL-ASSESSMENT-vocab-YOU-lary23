import { createWord, getWords, updateWord } from '../api/vocabData';
import { showWords } from '../pages/vocab';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-entry')) {
      const payload = {
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        // time_submitted: document.querySelector('#time_submitted').value,
      };

      createWord(payload).then(({ word }) => {
        const patchPayload = { firebaseKey: word };

        updateWord(patchPayload).then(() => {
          getWords().then(showWords);
        });
      });
    }
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        firebaseKey,
      };
      updateWord(payload).then(() => {
        getWords().then(showWords);
      });
    }
  });
};

export default formEvents;
