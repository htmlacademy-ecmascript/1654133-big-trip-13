import AbstractView from './abstract';

function createTripInfoTitle(title) {
    return `<h1 class="trip-info__title">${title}</h1>`;
}

export default class InfoTitle extends AbstractView{
  constructor(title) {
    super();

    this._title = title;
  }

  getTemplate() {
    return createTripInfoTitle(this._title);
  }
}
