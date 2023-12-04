import logoutButton from '../components/logoutButton';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  navBar();
  logoutButton();
  navigationEvents();
};

export default startApp;
