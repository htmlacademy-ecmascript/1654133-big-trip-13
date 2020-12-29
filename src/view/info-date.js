import AbstractView from './abstract';

function createTripInfoDate(dateRange) {
  return `<p class="trip-info__dates">${dateRange}</p>`;
}

export default class InfoDate extends AbstractView {
  constructor(dateRange) {
    super();

    this._dateRange = dateRange;
  }

  getTemplate() {
    return createTripInfoDate(this._dateRange);
  }
}
