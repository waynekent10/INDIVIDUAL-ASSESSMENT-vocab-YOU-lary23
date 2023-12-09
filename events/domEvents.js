import { deleteSingleWord, getSingleWord, getWords } from '../api/vocabData';
import addWordForm from '../components/form/addWordForm';
import { showWords } from '../pages/vocab';
import clearDom from '../utils/clearDom';

// Define the function domevnts that takes user as the parameter
const domEvents = (user) => {
  // Add a click eventlistener to the element with the id of main container
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // check if the clicked element has an id that includes delete-word
    if (e.target.id.includes('delete-word')) {
      // display a confirmation dialog and proceed if the user confirms
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete this lingo?')) {
        // Extract the firebasekey from the clicked element id
        const [, firebaseKey] = e.target.id.split('--');

        // Delete the word with the specified firebaseKey
        deleteSingleWord(firebaseKey).then(() => {
          // Fetch updated words and display them
          getWords(user.uid).then(showWords);
        });
      }
    }
    // Check if the clicked element haas an id that includes 'submitWord'
    if (e.target.id.includes('submitWord')) {
      // Add a new word form
      addWordForm({}, user);
      clearDom();
    }

    // Check to see if the element has an id that includes  edit wordbtn
    if (e.target.id.includes('edit-word-btn')) {
      // Extract the firebasekey from the clicked elements id
      const [, firebaseKey] = e.target.id.split('--');

      // Fetch the detailes of the single word using the firebase key and add a word form with fetched details
      getSingleWord(firebaseKey).then((wordObj) => addWordForm(wordObj));
    }
  });
};

export default domEvents;
