import SwitchesView from './view/switches';
import TripPresenter from './presenter/trip';
import FilterPresenter from './presenter/filter';
import SummaryPresenter from './presenter/summary';
import PointsModel from './model/points';
import FilterModel from './model/filter';
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

render(tripSwitchesHandler, new SwitchesView(), RenderPosition.AFTERBEGIN);

const summaryPresenter = new SummaryPresenter(tripMainHandler, pointsModel);
summaryPresenter.init();

const filterModel = new FilterModel();
const filterPresenter = new FilterPresenter(tripControlsHandler, filterModel, pointsModel);
filterPresenter.init();

const tripEventsElement = document.querySelector(`.trip-events`);

const tripPresenter = new TripPresenter(tripEventsElement, pointsModel, filterModel);
tripPresenter.init();
