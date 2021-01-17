import AbstractView from './abstract';

function createFilterItemTemplate(filter, currentFilterType) {
  return `<div class="trip-filters__filter">
    <input
      id="filter-${filter}"
      class="trip-filters__filter-input  visually-hidden"
      type="radio"
      name="trip-filter"
      value="${filter}"
      ${filter === currentFilterType ? `checked` : ``}>
    <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
  </div>`;
}

function createTripFilters(filterItems, currentFilterType) {
  const filterItemsTemplate = filterItems.map((filter) => createFilterItemTemplate(filter, currentFilterType)).join(``);

  return `<form class="trip-filters" action="#" method="get">
    ${filterItemsTemplate}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
}

export default class Filter extends AbstractView {
  constructor(filters, currentFilterType) {
    super();

    this._filters = filters;
    this._currentFilter = currentFilterType;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createTripFilters(this._filters, this._currentFilter);
  }
}
