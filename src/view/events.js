import AbstractView from './abstract';

function createTripEventsList() {
  return `<ul class="trip-events__list">
    </ul>`;
}


export default class Events extends AbstractView{
  getTemplate() {
    return createTripEventsList();
  }
}
