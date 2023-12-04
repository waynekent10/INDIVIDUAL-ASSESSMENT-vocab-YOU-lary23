import { deleteSingleWord, getWords } from '../api/vocabData';
import addWordForm from '../components/form/addWordForm';
import { showVocab } from '../pages/vocab';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete this lingo?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleWord(firebaseKey).then(() => {
          getWords().then(showVocab);
        });
      }
    }
    if (e.target.id.includes('add-word-btn')) {
      console.warn('ADD Word');
      addWordForm({});
    }
  });
};

export default domEvents;