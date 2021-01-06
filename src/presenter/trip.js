import TripInfoView from '../view/trip-info';
import SwitchesView from '../view/switches';
import FiltersView from '../view/filters';
import EventsSortFormView from '../view/events-sort-form';
import EventsView from '../view/events';
import {render, RenderPosition} from '../utils/render';


export default class Trip {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;

    this._tripControlsHandler = tripContainer.querySelector(`.trip-controls`);
    this._tripSwitchesHandler = this._tripControlsHandler.querySelector(`.visually-hidden`);
    this._tripEventsHandler = document.querySelector(`.trip-events`);
  }

  init(tripPoints) {
    this._tripPoints = tripPoints.slice();

    render(this._tripContainer, new TripInfoView(tripPoints), RenderPosition.AFTERBEGIN);
    render(this._tripSwitchesHandler, new SwitchesView(), RenderPosition.AFTERBEGIN);
    render(this._tripControlsHandler, new FiltersView(), RenderPosition.BEFOREEND);
    render(this._tripEventsHandler, new EventsSortFormView(), RenderPosition.BEFOREEND);
    render(this._tripEventsHandler, new EventsView(), RenderPosition.BEFOREEND);
  }
}