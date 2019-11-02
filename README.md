# all-the-cities

All the 138,398 cities of the world with a population of at least 1000 inhabitants, in a big JSON array.

Derived from the [cities1000](https://www.npmjs.com/package/cities1000) npm package, which in turn came from [geonames.org data](http://download.geonames.org/export/dump/).

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install all-the-cities --save
```

## Usage

```js
const cities = require("all-the-cities")

cities.filter(city => {
  return city.name.match('Albuquerque')
})

// [{
//   cityId: '5454711',
//   name: 'Albuquerque',
//   country: 'US',
//   altCountry: '',
//   muni: '',
//   muniSub: '',
//   featureClass: 'P',
//   featureCode: 'PPLA2',
//   adminCode: 'NM',
//   population: 545852,
//   loc: {
//     type: 'Point',
//     coordinates: [-106.65114, 35.084] 
//   }
// }, {
//   cityId: '5476960',
//   name: 'Los Ranchos de Albuquerque',
//   country: 'US',
//   altCountry: '',
//   muni: '',
//   muniSub: '',
//   featureClass: 'P',
//   featureCode: 'PPL',
//   adminCode: 'NM',
//   population: 6024,
//   loc: {
//     type: 'Point',
//     coordinates: [-106.6428, 35.16199]
//   }
// }]

```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [cities-with-1000](https://github.com/nabilashraf/cities1000): lat/lon, names of cities with over 1000 people
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers
- [split2](https://github.com/mcollina/split2): split a Text Stream into a Line Stream, using Stream 3
- [through2](https://github.com/rvagg/through2): A tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
