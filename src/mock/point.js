import { getRandomInteger, getRandomType, getRandomCity, getRandomDescription, getRandomOffers, getRandomPrice, getRandomImages, getRandomDates } from '../utils/tools';

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
}
