import TripInfo from './view/trip-info';
import Switches from './view/switches';
import Filters from './view/filters';
import EventsSortForm from './view/events-sort-form';
import Events from './view/events';
import {createAddNewPoint} from './view/add-new-point';
import EditPoint from './view/edit-point';
import Point from './view/point';
import {generateTripPoint} from './mock/point';
import {renderElement, RenderPosition, renderTemplate} from './utils/utils';

const TRIP_POINTS = 20;

const tripPoints = new Array(TRIP_POINTS).fill().map(generateTripPoint);
tripPoints.sort(function(a,b) {
  return a.dates[0] - b.dates[0];
});

const tripMainHandler = document.querySelector('.trip-main');
const tripControlsHandler = tripMainHandler.querySelector('.trip-controls');
const tripSwitchesHandler = tripControlsHandler.querySelector('.visually-hidden');
renderElement(tripMainHandler, new TripInfo(tripPoints).getElement(), RenderPosition.AFTERBEGIN);
renderElement(tripSwitchesHandler, new Switches().getElement(), RenderPosition.AFTERBEGIN);
renderElement(tripControlsHandler, new Filters().getElement(), RenderPosition.BEFOREEND);

const tripEventsHandler = document.querySelector('.trip-events');
renderElement(tripEventsHandler, new EventsSortForm().getElement(), RenderPosition.BEFOREEND);
renderElement(tripEventsHandler, new Events().getElement(), RenderPosition.BEFOREEND);

const tripEventsListHandler = document.querySelector('.trip-events__list');
renderElement(tripEventsListHandler, new EditPoint(tripPoints[0]).getElement(), RenderPosition.BEFOREEND);

for (let i = 1; i < TRIP_POINTS; i++) {
  renderElement(tripEventsListHandler, new Point(tripPoints[i]).getElement(), RenderPosition.BEFOREEND);
}
