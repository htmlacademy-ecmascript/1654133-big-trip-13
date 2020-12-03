import {createTripInfoTitle} from './trip-info-title-view';
import {createTripInfoDate} from './trip-info-date-view';
import {createCostView} from './cost-view';

export function createTripInfo() {
    return `
    <section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
            ${createTripInfoTitle()}
            ${createTripInfoDate()}
        </div>
        ${createCostView()}
    </section>
    `;
};