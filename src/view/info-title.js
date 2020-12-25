function createTripInfoTitle(title) {
    return `<h1 class="trip-info__title">${title}</h1>`;
}

export default class InfoTitle {
  constructor(title) {
    this._element = title;
  }

  getTemplate() {
    return createTripInfoTitle(this._element);
  }
}
