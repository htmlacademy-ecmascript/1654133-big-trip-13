import dayjs from 'dayjs';

import InfoTitle from './info-title';
import InfoDate from './info-date';
import Cost from './cost';

import {createElement} from '../utils';

function createTripInfo(tripPoints) {
  const firstPoint = tripPoints[0];
  const lastPoint = tripPoints[tripPoints.length - 1];
  const tripRange = dayjs(lastPoint.dates[0]).diff(dayjs(firstPoint.dates[0]), 'month') > 0
    ? `${dayjs(firstPoint.dates[0]).format('MMM DD')}&nbsp;&mdash;&nbsp;${dayjs(lastPoint.dates[0]).format('MMM DD')}`
    : `${dayjs(firstPoint.dates[0]).format('MMM DD')}&nbsp;&mdash;&nbsp;${dayjs(lastPoint.dates[0]).format('DD')}`;

  let tripTitle;
  if (tripPoints.length > 3) {
    tripTitle = `${firstPoint.city}&nbsp;&mdash;&nbsp;&#8230;&nbsp;&mdash;&nbsp;${lastPoint.city}`;
  } else {
    tripTitle = tripPoints.map(elem => elem.city).join('&nbsp;&mdash;&nbsp;');
  };

  let cost = 0;
  for (const point of tripPoints) {
    cost += point['price'];
  };

  return `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
          ${new InfoTitle(tripTitle).getTemplate()}
          ${new InfoDate(tripRange).getTemplate()}
      </div>
      ${new Cost(cost).getTemplate()}
  </section>`;
}

export default class TripInfo {
  constructor(points) {
    this._points = points;
    this._element = null;
  }

  getTemplate() {
    return createTripInfo(this._points);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
