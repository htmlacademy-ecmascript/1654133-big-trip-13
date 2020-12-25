import {createElement} from '../utils/utils';

function createTripInfoTitle(title) {
    return `<h1 class="trip-info__title">${title}</h1>`;
}

export default class InfoTitle {
  constructor(title) {
    this._title = title;
    this._element = title;
  }

  getTemplate() {
    return createTripInfoTitle(this._title);
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
