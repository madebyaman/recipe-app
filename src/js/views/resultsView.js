import View from './View';
import icons from '../../img/icons.svg';

// <div class="search-results">
//   <ul class="results">
//     <!--
//      -->
//   </ul>

//   <div class="pagination">
//     <!-- <button class="btn--inline pagination__btn--prev">
//       <svg class="search__icon">
//         <use href="src/img/icons.svg#icon-arrow-left"></use>
//       </svg>
//       <span>Page 1</span>
//     </button>
//     <button class="btn--inline pagination__btn--next">
//       <span>Page 3</span>
//       <svg class="search__icon">
//         <use href="src/img/icons.svg#icon-arrow-right"></use>
//       </svg>
//     </button> -->
//   </div>
class ResultsView extends View {
  _parentElement = document.querySelector('.results');

  _generateMarkup() {
    return this._data.map(this._generateMarkupForSearchResult).join('');
  }

  _generateMarkupForSearchResult(result) {
    return `
   <li class="preview">
       <a class="preview__link" href="#${result.id}">
         <figure class="preview__fig">
           <img src="${result.image}" alt="${result.title}" />
         </figure>
         <div class="preview__data">
           <h4 class="preview__title">${result.title}</h4>
           <p class="preview__publisher">${result.id}</p>
         </div>
       </a>
     </li>
    `;
  }
}

export default new ResultsView();
