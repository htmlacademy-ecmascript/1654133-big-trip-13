import AbstractView from './abstract';

function createCost(cost) {
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
  </p>`;
}

export default class Cost extends AbstractView {
  constructor(cost) {
    super();

    this._cost = cost;
  }

  getTemplate() {
    return createCost(this._cost);
  }
}
