import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4">
    <div class="form-group">
      <label for="word">Word</label>
      <input type="text" class="form-control" id="word" aria-describedby="bookTitle" placeholder="Enter a word or phrase" value="${obj.word || ''}" required>
    </div>
    <div class="form-group">
    <label for="definition">Definition</label>
    <textarea class="form-control" placeholder="Enter a definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
  </div>
  <select class="form-select" aria-label="Default select example" id="category" required>
  <option selected>Select a Language/option>
  <option value="Javascript">One</option>
  <option value="CSS">Two</option>
  <option value="General Term..">Three</option>
</select>

  <label for="category">Language</label>
  <input type="text" class="form-control" id="category" placeholder="Placeholder" value="${obj.category || ''}" required>
</div>
  <div class="form-group">
  <div class="form-group" id="select-category">
  </div>

  </div> <button type="submit" class="btn btn-primary">Submit Entry
  </button>
</form>`;

  renderToDOM('#form-container', domString);
};

export default addWordForm;
