import TripInfoView from './view/trip-info';
import SwitchesView from './view/switches';
import FiltersView from './view/filters';
import TripPresenter from './presenter/trip';
import PointsModel from './model/points';
import {generateTripPoint} from './mock/point';
import {render, RenderPosition} from './utils/render';

const TRIP_POINTS = 20;
const tripPoints = new Array(TRIP_POINTS).fill().map(generateTripPoint);
tripPoints.sort((a, b) => {
  return a.dates[0] - b.dates[0];
});

const pointsModel = new PointsModel();
pointsModel.setPoints(tripPoints);

const tripMainHandler = document.querySelector(`.trip-main`);
const tripControlsHandler = tripMainHandler.querySelector(`.trip-controls`);
const tripSwitchesHandler = tripControlsHandler.querySelector(`.visually-hidden`);

render(tripMainHandler, new TripInfoView(tripPoints), RenderPosition.AFTERBEGIN);
render(tripSwitchesHandler, new SwitchesView(), RenderPosition.AFTERBEGIN);
render(tripControlsHandler, new FiltersView(), RenderPosition.BEFOREEND);

const tripEventsElement = document.querySelector(`.trip-events`);

const tripPresenter = new TripPresenter(tripEventsElement, pointsModel);
tripPresenter.init();
