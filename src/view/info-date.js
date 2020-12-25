function createTripInfoDate(dateRange) {
    return `<p class="trip-info__dates">${dateRange}</p>`;
}

export default class InfoDate {
  constructor(dateRange) {
    this._element = dateRange;
  }

  getTemplate() {
    return createTripInfoDate(this._element);
  }
}
