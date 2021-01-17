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
    const pointsCount = this._pointsModel.getPoints().length;
    const prevSummaryComponent = this._summaryComponent;

    if (pointsCount === 0) {
      if (this._summaryComponent !== null) {
        remove(this._summaryComponent);
      }
      return;
    }

    this._summaryComponent = new TripInfoView(this._pointsModel.getPoints());

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
