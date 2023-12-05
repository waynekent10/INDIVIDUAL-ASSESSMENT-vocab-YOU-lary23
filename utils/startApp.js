import { getWords } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { showVocab } from '../pages/vocab';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  logoutButton();
  navigationEvents();
  getWords().then(showVocab);
};

export default startApp;
