import TripInfo from './view/trip-info';
import Switches from './view/switches';
import Filters from './view/filters';
import EventsSortForm from './view/events-sort-form';
import Events from './view/events';
import Point from './view/point';
import EditPoint from './view/edit-point';
import {generateTripPoint} from './mock/point';
import {render, RenderPosition} from './utils/render';

const TRIP_POINTS = 20;
const tripPoints = new Array(TRIP_POINTS).fill().map(generateTripPoint);
tripPoints.sort(function(a,b) {
  return a.dates[0] - b.dates[0];
});

const renderPoint = (container, point) => {
  const pointComponent = new Point(point);
  const pointEditComponent = new EditPoint(point);

  const replacePointToForm = () => {
    container.replaceChild(pointEditComponent.getElement(), pointComponent.getElement());
  }

  const replaceFormToPoint = () => {
    container.replaceChild(pointComponent.getElement(), pointEditComponent.getElement());
  }

  pointComponent.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      replacePointToForm();
  });

  pointEditComponent.getElement()
    .querySelector(`form`)
    .addEventListener(`submit`, () => {
      replaceFormToPoint();
    });

  pointEditComponent.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      replaceFormToPoint();
    });

  render(container, pointComponent.getElement(), RenderPosition.BEFOREEND);
}

const tripMainHandler = document.querySelector('.trip-main');
const tripControlsHandler = tripMainHandler.querySelector('.trip-controls');
const tripSwitchesHandler = tripControlsHandler.querySelector('.visually-hidden');
render(tripMainHandler, new TripInfo(tripPoints).getElement(), RenderPosition.AFTERBEGIN);
render(tripSwitchesHandler, new Switches().getElement(), RenderPosition.AFTERBEGIN);
render(tripControlsHandler, new Filters().getElement(), RenderPosition.BEFOREEND);

const tripEventsHandler = document.querySelector('.trip-events');
render(tripEventsHandler, new EventsSortForm().getElement(), RenderPosition.BEFOREEND);
render(tripEventsHandler, new Events().getElement(), RenderPosition.BEFOREEND);

const tripEventsListHandler = document.querySelector('.trip-events__list');

for (const point of tripPoints) {
  renderPoint(tripEventsListHandler, point);
}
