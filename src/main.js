import Point from './view/point';
import EditPoint from './view/edit-point';
import TripPresenter from './presenter/trip';
import {generateTripPoint} from './mock/point';
import {render, RenderPosition, replace} from './utils/render';

const TRIP_POINTS = 20;
const tripPoints = new Array(TRIP_POINTS).fill().map(generateTripPoint);
tripPoints.sort((a, b) => {
  return a.dates[0] - b.dates[0];
});

const tripMainHandler = document.querySelector(`.trip-main`);

const tripPresenter = new TripPresenter(tripMainHandler);
tripPresenter.init(tripPoints);
