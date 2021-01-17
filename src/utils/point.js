import dayjs from 'dayjs';

export const isPointInPast = (endDate) => {
  return dayjs.isAfter(endDate, `D`);
};

export const isPointInFuture = (startDate) => {

};
