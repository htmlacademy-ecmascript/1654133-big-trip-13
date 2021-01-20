import {FilterType} from '../const';
import {isPointInFuture, isPointInPast} from './point';

export const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isPointInFuture(point.dates[0])),
  [FilterType.PAST]: (points) => points.filter((point) => isPointInPast(point.dates[1])),
};
