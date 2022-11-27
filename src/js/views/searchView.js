class SearchView {
  _parentElement = document.getElementById('search');

  getQuery() {
    return this._parentElement.querySelector('.search__field').value;
  }

  addSearchHandler(handler) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
