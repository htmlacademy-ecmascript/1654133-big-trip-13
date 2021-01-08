import dayjs from 'dayjs';

import AbstractView from './abstract';

import InfoTitle from './info-title';
import InfoDate from './info-date';
import Cost from './cost';

function createTripInfo(tripPoints) {
  const firstDay = dayjs(tripPoints[0].dates[0]);
  const lastDay = dayjs(tripPoints[tripPoints.length - 1].dates[0]);

  const tripRange = lastDay.format(`M`) - firstDay.format(`M`) !== 0
    ? `${firstDay.format(`MMM DD`)}&nbsp;&mdash;&nbsp;${lastDay.format(`MMM DD`)}`
    : `${firstDay.format(`MMM DD`)}&nbsp;&mdash;&nbsp;${lastDay.format(`DD`)}`;

  const firstCity = tripPoints[0].city;
  const lastCity = tripPoints[tripPoints.length - 1].city;
  let tripTitle;
  if (tripPoints.length > 3) {
    tripTitle = `${firstCity}&nbsp;&mdash;&nbsp;&#8230;&nbsp;&mdash;&nbsp;${lastCity}`;
  } else {
    tripTitle = tripPoints.map((elem) => elem.city).join(`&nbsp;&mdash;&nbsp;`);
  }

  let cost = 0;
  for (const point of tripPoints) {
    cost += point[`price`];
  }

  return `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
          ${new InfoTitle(tripTitle).getTemplate()}
          ${new InfoDate(tripRange).getTemplate()}
      </div>
      ${new Cost(cost).getTemplate()}
  </section>`;
}

export default class TripInfo extends AbstractView {
  constructor(points) {
    super();

    this._points = points;
  }

  getTemplate() {
    return createTripInfo(this._points);
  }
}
