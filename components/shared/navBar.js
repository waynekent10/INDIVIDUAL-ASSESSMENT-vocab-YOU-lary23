import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id="home">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Book Titles"
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
