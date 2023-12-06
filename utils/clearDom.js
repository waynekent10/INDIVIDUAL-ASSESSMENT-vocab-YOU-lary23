const clearDom = () => {
  document.querySelector('#wordbank').innerHTML = '';
  document.querySelector('#filter-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
