import dayjs from 'dayjs';

import {createTripInfoTitle} from './trip-info-title-view';
import {createTripInfoDate} from './trip-info-date-view';
import {createCostView} from './cost-view';

export function createTripInfo(tripPoints) {
  const firstPoint = tripPoints[0];
  const lastPoint = tripPoints[tripPoints.length - 1];
  const tripRange = `${dayjs(firstPoint.dates[0]).format('MMM DD')}&nbsp;&mdash;&nbsp;${dayjs(lastPoint.dates[0]).format('DD')}`;

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
          ${createTripInfoTitle(tripTitle)}
          ${createTripInfoDate(tripRange)}
      </div>
      ${createCostView(cost)}
  </section>`;
};
