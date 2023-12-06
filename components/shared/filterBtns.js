import renderToDOM from '../../utils/renderToDom';

const filterBtns = () => {
  const domString = `
    <div class="button-container">
    <div class="container" id="filterbtns">
    <button class="btn btn-secondary" id="allBtn">All Words</button>
    <button class="btn btn-danger" id="javaBtn">Javascript</button>
    <button class="btn btn-warning"  id="cssBtn">CSS</button>
    <button class="btn btn-primary" id="htmlBtn">HTML</button>
    <button class="btn btn-success" id="generalBtn">General</button>
</div>
</div>
`;
  renderToDOM('#filter-container', domString);
};
export default filterBtns;
