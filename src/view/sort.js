import AbstractView from './abstract';

function checked(sortType, currentSortType) {
  return sortType === currentSortType ? `checked` : ``;
}

function createSortItemTemplate(sortType, currentSortType, isDisabled) {
  return `<div class="trip-sort__item  trip-sort__item--${sortType}">
    <input id="sort-${sortType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType}" data-sort-type="${sortType}" ${checked(sortType, currentSortType)} ${isDisabled ? `disabled` : ``}>
    <label class="trip-sort__btn" for="sort-${sortType}">${sortType}</label>
  </div>`;
}

function createSortTemplate(currentSortType) {
  const ITEMS = [
    {type: `day`, disabled: false},
    {type: `event`, disabled: true},
    {type: `time`, disabled: false},
    {type: `price`, disabled: false},
    {type: `offer`, disabled: true},
  ];

  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${ITEMS.map((item) => createSortItemTemplate(item.type, currentSortType, item.disabled)).join(``)}
    </form>`;
}

export default class Sort extends AbstractView {
  constructor(currentSortType) {
    super();

    this._currentSortType = currentSortType;

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortTemplate(this._currentSortType);
  }

  _sortTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`change`, this._sortTypeChangeHandler);
  }
}
