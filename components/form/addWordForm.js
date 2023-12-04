import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'create-entry'}" class="mb-4">
    <div class="form-group">
      <label for="title">Book Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter a word or phrase" value="${obj.word || ''}" required>
    </div>
    <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" placeholder="Enter a definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
  </div>
  <div class="form-group">
  <div class="form-group" id="select-language">
  </div> <button type="submit" class="btn btn-primary">Submit Book
  </button>
</form>`;

  renderToDOM('#form-container', domString);
};

export default addWordForm;
