import {AMENTIES, PICTURES} from './constants.js';
import {reviews} from './reviews.js';

export const offers = [
  {
    title: `Beautiful & luxurious studio at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.` +
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Apartment`,
    bedroom: `1 bedroom`,
    capacity: `4 adults`,
    premium: true,
    price: Math.round(Math.random() * 100),
    rate: Math.round(Math.random() * 5),
    pictures: PICTURES,
    amenities: AMENTIES,
    host: {
      name: `Angelina`,
      avatar: `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/51/51dfce0e1690a2cc18ada4aefd7f8f1622b662e0.jpg`,
      super: true
    },
    reviews
  },
  {
    title: `Wood and stone place`,
    description: `Wood and stone place`,
    type: `Private room`,
    bedroom: `1 bedroom`,
    capacity: `4 adults`,
    premium: true,
    price: Math.round(Math.random() * 100),
    rate: Math.round(Math.random() * 5),
    pictures: PICTURES,
    amenties: AMENTIES,
    host: {
      name: `Angelina`,
      avatar: `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9b/9b22332e7f57948df98025f0148f5d6ca1c28347.jpg`,
      super: true
    },
    reviews
  },
  {
    title: `Canal View Prinsengracht`,
    description: `Canal View Prinsengracht`,
    type: `Apartment`,
    bedroom: `1 bedroom`,
    capacity: `4 adults`,
    premium: false,
    price: Math.round(Math.random() * 100),
    rate: Math.round(Math.random() * 5),
    pictures: PICTURES,
    amenties: AMENTIES,
    host: {
      name: `Angelina`,
      avatar: `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9a/9a191fe49af8fb5ea1652adc7f2f8556e15f1fe3.jpg`,
      super: false
    },
    reviews
  },
  {
    title: `Nice, cozy, warm big bed apartment`,
    description: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    bedroom: `1 bedroom`,
    capacity: `4 adults`,
    premium: false,
    price: Math.round(Math.random() * 100),
    rate: Math.round(Math.random() * 5),
    pictures: PICTURES,
    amenties: AMENTIES,
    host: {
      name: `Angelina`,
      avatar: `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/0075ef84f05a328864f26972cd2e8ec460338ff7.jpg`,
      super: false
    },
    reviews
  }
];
