import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4">
    <div class="form-group">
      <label for="word">Word</label>
      <input type="text" class="form-control" id="wordVocab" aria-describedby="bookTitle" placeholder="Enter a word or phrase" value="${obj.word || ''}" required>
    </div>
    <div class="form-group">
    <label for="definition">Definition</label>
    <textarea class="form-control" placeholder="Enter a definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
  </div>
  <div class="form-group">
  <div class="form-group" id="select-language">
  </div> <button type="submit" class="btn btn-primary">Submit Word
  </button>
</form>`;

  renderToDOM('#form-container', domString);
};

export default addWordForm;
