import { deleteSingleWord, getSingleWord, getWords } from '../api/vocabData';
import addWordForm from '../components/form/addWordForm';
import { showWords } from '../pages/vocab';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete this lingo?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleWord(firebaseKey).then(() => {
          getWords().then(showWords);
        });
      }
    }
    if (e.target.id.includes('submitWord')) {
      console.warn('ADD Word');
      addWordForm({});
    }

    if (e.target.id.includes('edit-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((wordObj) => addWordForm(wordObj));
    }
  });
};

export default domEvents;
