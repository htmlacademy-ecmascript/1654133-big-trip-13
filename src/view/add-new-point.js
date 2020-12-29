import dayjs from 'dayjs';

import AbstractView from './abstract';
import EventTypes from './event-types';
import {CITIES} from '../const';
import {getId} from '../utils/tools';

function createOffersTemplate(offers) {
  if (Object.keys(offers).length === 0) {
    return ``;
  }

  let template = ``;

  for (const offer of Object.getOwnPropertyNames(offers)) {
    const offerId = getId();
    const price = offers[offer];
    template += `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offerId}" type="checkbox" name="event-offer-${offerId}" checked>
    <label class="event__offer-label" for="event-offer-${offerId}">
        <span class="event__offer-title">${offer}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
    </label>
    </div>`;
  }

  return `<section class="event__section  event__section--offers">
  <h3 class="event__section-title  event__section-title--offers">Offers</h3>
  <div class="event__available-offers">${template}</div>
  </section>`;
}

function createAddNewPoint(point) {
  const {city, description, images, offers, dates} = point;
  const startDate = dayjs(dates[0]).format(`DD/MM/YY HH:mm`);
  const endDate = dayjs(dates[1]).format(`DD/MM/YY HH:mm`);

  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            ${new EventTypes().getTemplate()}
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
              Flight
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
          <datalist id="destination-list-1">
              ${CITIES.map((value) => `<option value="${value}"></option>`)}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDate}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDate}">
        </div>

        <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">
        ${createOffersTemplate(offers)}

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
            ${images.map((image) => `<img class="event__photo" src="${image}" alt="Event photo">`)}
            </div>
          </div>
        </section>
      </section>
    </form>
  </li>`;
}

export default class AddNewPoint extends AbstractView {
  constructor(point) {
    super();
    this._point = point;
  }

  getTemplate() {
    return createAddNewPoint(this._point);
  }
}
