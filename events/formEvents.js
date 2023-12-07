import { createWord, getWords, updateWord } from '../api/vocabData';
import addWordForm from '../components/form/addWordForm';
import { showWords } from '../pages/vocab';
import clearDom from '../utils/clearDom';
import timestamp from '../utils/timestamp';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-entry')) {
      const payload = {
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        time_submitted: timestamp
      };
      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

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
    addWordForm({});
    clearDom();
  });
};

export default formEvents;
