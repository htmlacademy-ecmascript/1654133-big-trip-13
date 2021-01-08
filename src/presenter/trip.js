import TripInfoView from '../view/trip-info';
import SwitchesView from '../view/switches';
import FiltersView from '../view/filters';
import EventsSortFormView from '../view/events-sort-form';
import EventsView from '../view/events';
import PointPresenter from '../presenter/point';
import {render, RenderPosition} from '../utils/render';


export default class Trip {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;
    this._pointPresenter = [];

    this._tripControlsHandler = tripContainer.querySelector(`.trip-controls`);
    this._tripSwitchesHandler = this._tripControlsHandler.querySelector(`.visually-hidden`);
    this._tripEventsHandler = document.querySelector(`.trip-events`);
    this._tripEventsListHandler = document.querySelector(`.trip-events__list`);

    this._handleModeChange = this._handleModeChange.bind(this);
  }

  init(tripPoints) {
    this._tripPoints = tripPoints.slice();

    render(this._tripContainer, new TripInfoView(tripPoints), RenderPosition.AFTERBEGIN);
    render(this._tripSwitchesHandler, new SwitchesView(), RenderPosition.AFTERBEGIN);
    render(this._tripControlsHandler, new FiltersView(), RenderPosition.BEFOREEND);
    render(this._tripEventsHandler, new EventsSortFormView(), RenderPosition.BEFOREEND);
    render(this._tripEventsHandler, new EventsView(), RenderPosition.BEFOREEND);

    this._tripEventsListHandler = document.querySelector(`.trip-events__list`);

    this._renderPoints();
  }

  _handleModeChange() {
    for (const point of this._pointPresenter) {
      point.resetView();
    }
  }

  _renderPoint(point) {
    const pointPresenter = new PointPresenter(this._tripEventsListHandler, this._handleModeChange);
    pointPresenter.init(point);
    this._pointPresenter.push(pointPresenter);
  }

  _renderPoints() {
    this._tripPoints.forEach((point) => this._renderPoint(point));
  }
}
