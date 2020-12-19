import dayjs from 'dayjs';

import { TRIP_POINT_TYPES, CITIES, DESCRIPTION, OFFERS } from './const';

export function getId(t=21) {
  let e="",r=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let n=63&r[t];e+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return e;
}

export function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export function getRandomType() {
  return TRIP_POINT_TYPES[getRandomInteger(0, TRIP_POINT_TYPES.length - 1)];
};

export function getRandomCity() {
  return CITIES[getRandomInteger(0, CITIES.length - 1)];
};

export function getRandomDescription() {
  const description = [];
  const sentencesNumber = getRandomInteger(1, 5);

  for (let i = 0; i < sentencesNumber; i++) {
    const sentence = DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)];
    description.push(sentence);
  }

  return description.join(' ');
};

export function getRandomPrice(maxPrice = 100) {
  return getRandomInteger(1, maxPrice) * 10;
};

export function getRandomImages() {
  const imagesNumber = getRandomInteger(1, 5);
  const images = []
  for (let i = 0; i < imagesNumber; i++) {
    images.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
  return images;
};

export function getRandomDates() {
  const offset = getRandomInteger(1, 10);

  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  const startDate = dayjs().add(daysGap, `day`);
  const endDate = startDate.add(offset, 'hour');

  return [startDate.toDate(), endDate.toDate()];
}

export function getRandomOffers(type) {
  const offersNumber = getRandomInteger(0, OFFERS[type].length);
  const offers = {};
  for (let i = 0; i < offersNumber; i++) {
    const price = getRandomInteger(10, 100);
    offers[OFFERS[type][i]] = price;
  }

  return offers;
}
