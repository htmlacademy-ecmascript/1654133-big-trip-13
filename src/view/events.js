function createTripEventsList() {
  return `
    <ul class="trip-events__list">
    </ul>`;
}


export default class Events {
  getTemplate() {
    return createTripEventsList();
  }
}
