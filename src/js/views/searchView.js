class SearchView {
  #parentElement = document.getElementById('search');

  getQuery() {
    return this.#parentElement.querySelector('.search__field').value;
  }

  addSearchHandler(handler) {
    this.#parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
