import {createTripInfo} from './view/trip-info-view';
import {createTripSwitches} from './view/trip-switches-view';
import {createTripFilters} from './view/trip-filters-view';
import {createTripEventsSortForm} from './view/trip-events-sort-form';
import {createTripEventsList} from './view/trip-events-view';
import {createAddNewPoint} from './view/trip-add-new-point-view';
import {createEditPoint} from './view/trip-edit-point-view';
import {createTripPoint} from './view/trip-point-view';
import {generateTripPoint} from './const';

const TRIP_POINTS = 20;

const tripPoints = new Array(TRIP_POINTS).fill().map(generateTripPoint);
tripPoints.sort(function(a,b) {
  return a.dates[0] - b.dates[0];
});

const tripMainHandler = document.querySelector('.trip-main');
const tripControlsHandler = tripMainHandler.querySelector('.trip-controls');
const tripSwitchesHandler = tripControlsHandler.querySelector('.visually-hidden');
render(tripMainHandler, createTripInfo(tripPoints), 'afterbegin');
render(tripSwitchesHandler, createTripSwitches(), 'afterend');
render(tripControlsHandler, createTripFilters(), 'beforeend');

const tripEventsHandler = document.querySelector('.trip-events');
render(tripEventsHandler, createTripEventsSortForm(), 'beforeend');
render(tripEventsHandler, createTripEventsList(), 'beforeend');

const tripEventsListHandler = document.querySelector('.trip-events__list');
render(tripEventsListHandler, createEditPoint(tripPoints[0]), 'beforeend');

for (let i = 1; i < TRIP_POINTS; i++) {
    render(tripEventsListHandler, createTripPoint(tripPoints[i]), 'beforeend');
}

function render(container, template, place) {
    container.insertAdjacentHTML(place, template);
}
