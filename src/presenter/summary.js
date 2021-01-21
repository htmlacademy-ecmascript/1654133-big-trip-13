import TripInfoView from '../view/trip-info';
import {render, replace, remove, RenderPosition} from '../utils/render';

export default class Summary {
  constructor(summaryContainer, pointsModel) {
    this._summaryContainer = summaryContainer;
    this._pointsModel = pointsModel;

    this._summaryComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);

    this._pointsModel.addObserver(this._handleModelEvent);
  }

  init() {
    const points = this._pointsModel.getPoints();
    const prevSummaryComponent = this._summaryComponent;

    if (!points.length) {
      if (this._summaryComponent !== null) {
        remove(this._summaryComponent);
        this._summaryComponent = null;
      }
      return;
    }

    this._summaryComponent = new TripInfoView(points);

    if (prevSummaryComponent === null) {
      render(this._summaryContainer, this._summaryComponent, RenderPosition.AFTERBEGIN);
      return;
    }

    replace(this._summaryComponent, prevSummaryComponent);
  }

  _handleModelEvent() {
    this.init();
  }
}
