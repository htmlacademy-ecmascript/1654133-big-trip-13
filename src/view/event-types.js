import AbstractView from './abstract';

import {TRIP_POINT_TYPES} from '../const';

function createEventTypes() {
  return `<div class="event__type-list">
    <fieldset class="event__type-group">
    <legend class="visually-hidden">Event type</legend>
    ${new Object(TRIP_POINT_TYPES)
      .map((type) => {
        const typeLowerCase = type.toLowerCase();
        
        return `<div class="event__type-item">
          <input id="event-type-${typeLowerCase}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${typeLowerCase}">
          <label class="event__type-label  event__type-label--${typeLowerCase}" for="event-type-${typeLowerCase}-1">${type}</label>
          </div>`})
        .join(``)}
    </fieldset>
  </div>`;
}

export default class EventTypes extends AbstractView {
  getTemplate() {
    return createEventTypes();
  }
}
