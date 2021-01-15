export default class Points {
  constructor() {
    this._points = [];
  }

  getPoints() {
    return this._points;
  }

  setPoints(value) {
    this._points = value.slice();
  }

  updatePoint(update) {
    const index = this._points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error(`Cannot update unexisting point`);
    }

    this._points = [
      ...this._points.slice(0, index),
      update,
      ...this._points.slice(index + 1)
    ];
  }
}
