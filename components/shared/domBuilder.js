import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="navigation"></div>
    <div id="main-container">
      <div id="add-button"></div>
      <div id="form-container"></div>
      <div id="wordbank"></div>
      <div id="view"></div>
    </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
