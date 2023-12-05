import renderToDOM from '../utils/renderToDom';

const emptyWords = () => {
  const domString = '<h1>No Words</h1>';
  renderToDOM('#wordbank', domString);
};

const showWords = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.word}</h5>
      <h5 class="card-text">${item.category}</h5>
      <p class="card-text">${item.definition}</p>
      <a href="#" id="edit-word-btn--${item.firebaseKey}" class="btn btn-primary">Edit</a>
      <a href="#" id="delete-word-btn--${item.firebaseKey}" class="btn btn-danger">Delete</a>
    </div>
  </div>`;
  });
  renderToDOM('#wordbank', domString);
};

export { emptyWords, showWords };
