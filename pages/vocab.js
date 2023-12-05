import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Words</h1>';
  renderToDOM('#wordbank', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-word-btn">Create Entry</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">${item.word}</h3>

    <h3 class="card-title">${item.category}</h3>
    <p class="card-text">${item.definition}</p>
  </div>
  <div class="card-body">
    <a href="#" class="card-link">Edit</a>
    <a href="#" class="card-link">Delete/a>
  </div>
</div>`;
  });
  renderToDOM('#wordbank', domString);
};

export { emptyVocab, showVocab };
