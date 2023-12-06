import renderToDOM from '../../utils/renderToDom';

const filterBtns = () => {
  const domString = `
    <div id="button-container">
    <button type="button" id="all-button" class="btn btn-secondary">All Words</button>
    <button type="button" id="java-button" class="btn btn-danger">Javascript</button>
    <button type="button" id="css-button" class="btn btn-warning">CSS</button>
    <button type="button" id="html-button" class="btn btn-primary">HTML/button>
    <button type="button" id="general-button" class="btn btn-success">General</button>
</div>
`;
  renderToDOM('#filter-container', domString);
};
export default filterBtns;
