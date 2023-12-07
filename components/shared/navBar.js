import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id="home">
      <img src="..." alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Vocab-You-lary
    </a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" id="createEntry">Create Entry</a>
        </li>
        <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Vocab"
              aria-label="Search"
            />
            </li>
          </ul>
          <span class="navbar-text">
            <div id="logout-button"></div>
          </span>
  </div>
</nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
