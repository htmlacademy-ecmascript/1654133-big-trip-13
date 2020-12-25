import {createElement} from '../utils/utils';

function createTripInfoDate(dateRange) {
    return `<p class="trip-info__dates">${dateRange}</p>`;
}

export default class InfoDate {
  constructor(dateRange) {
    this._dateRange = dateRange;
    this._element = null;
  }

  getTemplate() {
    return createTripInfoDate(this._dateRange);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
