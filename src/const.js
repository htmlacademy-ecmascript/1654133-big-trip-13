import dayjs from 'dayjs';

const TRIP_POINT_TYPES = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Transport',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant',
];

export const CITIES = [
  'Moscow',
  'St. Petersburg',
  'Yekaterinburg',
  'Beijing',
  'Guangzhou',
  'London',
  'Berlin',
  'Amsterdam',
  'New York',
  'Dallas',
  'Austin',
  'Paris',
  'Vienna',
];

const DESCRIPTION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const OFFERS = {
  'Taxi': ['Order Uber'],
  'Bus': ['Switch to comfort class'],
  'Train': ['Travel by Airlines', 'Switch to comfort class', 'Add meal'],
  'Ship': ['Switch to comfort class', 'Travel by Airlines', 'Rent a yacht'],
  'Transport': ['Order Uber', 'Rent a bicycle'],
  'Drive': ['Rent a car'],
  'Flight': ['Add luggage', 'Choose seats', 'Switch to comfort class', 'Travel by train', 'Add meal'],
  'Check-in': ['Add breakfast', 'Early check-in', 'Late check-out'],
  'Sightseeing': ['Book tickets', 'Lunch in city', 'Buy souvenirs', 'Take a tour guide'],
  'Restaurant': ['Order Uber', 'Add wine', 'Take a music band'],
};

function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

function getRandomType() {
  return TRIP_POINT_TYPES[getRandomInteger(0, TRIP_POINT_TYPES.length - 1)];
};

function getRandomCity() {
  return CITIES[getRandomInteger(0, CITIES.length - 1)];
};

function getRandomDescription() {
  const description = [];
  const sentencesNumber = getRandomInteger(1, 5);

  for (let i = 0; i < sentencesNumber; i++) {
    const sentence = DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)];
    description.push(sentence);
  }

  return description.join(' ');
};

function getRandomPrice(maxPrice = 100) {
  return getRandomInteger(1, maxPrice) * 10;
};

function getRandomImages() {
  const imagesNumber = getRandomInteger(1, 5);
  const images = []
  for (let i = 0; i < imagesNumber; i++) {
    images.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
  return images;
};

function getRandomDates() {
  const HOURS = 1000 * 60 * 60;
  const offset = getRandomInteger(1, 10);

  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  const startDate = dayjs().add(daysGap, `day`);
  const endDate = startDate.add(offset, 'hour');

  return [startDate.toDate(), endDate.toDate()];
}

function getRandomOffers(type) {
  const offersNumber = getRandomInteger(0, OFFERS[type].length);
  const offers = {};
  for (let i = 0; i < offersNumber; i++) {
    const price = getRandomInteger(10, 100);
    offers[OFFERS[type][i]] = price;
  }

  return offers;
}

export function generateTripPoint() {
  const type = getRandomType();

  return {
    type,
    city: getRandomCity(),
    description: getRandomDescription(),
    offers: getRandomOffers(type),
    price: getRandomPrice(),
    images: getRandomImages(),
    dates: getRandomDates(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};
