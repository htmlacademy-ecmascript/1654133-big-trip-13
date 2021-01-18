import dayjs from 'dayjs';

export const isPointInPast = (endDate) => {
  return dayjs().isAfter(endDate, `D`);
};

export const isPointInFuture = (startDate) => {
  return dayjs().isBefore(startDate, `D`) || dayjs().isSame(startDate, `D`);
};
