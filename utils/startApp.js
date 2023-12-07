import { getWords } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import filterBtns from '../components/shared/filterBtns';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import filterBtnsEvents from '../events/filterBtnsEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showWords } from '../pages/vocab';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  formEvents(user);
  navBar();
  filterBtns();
  filterBtnsEvents();
  logoutButton();
  navigationEvents(user);
  getWords(user.uid).then(showWords);
};

export default startApp;
