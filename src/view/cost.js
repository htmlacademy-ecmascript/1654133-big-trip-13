function createCost(cost) {
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
  </p>`;
}

export default class Cost {
  constructor(cost) {
    this._element = cost;
  }

  getTemplate() {
    return createCost(this._element);
  }
}
