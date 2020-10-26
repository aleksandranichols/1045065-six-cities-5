const reviews = [
  {
    name: `Max`,
    avatar: `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8f/8f09cb9ff86bd5c779cb0a1eb5f1a872790997ed.jpg`,
    rate: Math.round(Math.random() * 5),
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: new Date().toLocaleDateString(`en-US`, {month: `long`, year: `numeric`})

  },
  {
    name: `Anna`,
    avatar: `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/92/92c8ea3cf0ce807c49b7cddc65c5aed3ee52d50c.jpg`,
    rate: Math.round(Math.random() * 5),
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: new Date().toLocaleDateString(`en-US`, {month: `long`, year: `numeric`})

  },
  {
    name: `Viktor`,
    avatar: `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/3e/3ee0d84662724eb9e6a9fa1c026a201f31c87fd0.jpg`,
    rate: Math.round(Math.random() * 5),
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: new Date().toLocaleDateString(`en-US`, {month: `long`, year: `numeric`})

  },
  {
    name: `Sasha`,
    avatar: `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ab/ab32b99f4d3f853d46324010fe0509be94754d0c.jpg`,
    rate: Math.round(Math.random() * 5),
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: new Date().toLocaleDateString(`en-US`, {month: `long`, year: `numeric`})

  }
];

export {reviews};
