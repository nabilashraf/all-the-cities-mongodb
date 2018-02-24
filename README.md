# all-the-cities

All the 138,398 cities of the world with a population of at least 1000 inhabitants, in a big JSON array that is ready to be imported in MongoDB for `geoSpatialSearch`.

Derived from the [cities-with-1000](https://www.npmjs.com/package/cities-with-1000) npm package, which in turn came from [geonames.org data](http://download.geonames.org/export/dump/).

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install all-the-cities-mongodb --save
```

## Usage

```js
const cities = require("all-the-cities-mongodb")

cities.filter(city => {
  return city.name.match('Albuquerque')
})

// [{
//   name: 'Albuquerque',
//   country: 'US',
//   altCountry: '',
//   muni: '',
//   muniSub: '',
//   featureClass: 'P',
//   featureCode: 'PPLA2',
//   adminCode: 'NM',
//   population: 545852,
//   lat: 35.08449,
//   lon: -106.65114
// }, {
//   name: 'Los Ranchos de Albuquerque',
//   country: 'US',
//   altCountry: '',
//   muni: '',
//   muniSub: '',
//   featureClass: 'P',
//   featureCode: 'PPL',
//   adminCode: 'NM',
//   population: 6024,
//   lat: 35.16199,
//   lon: -106.6428
// }]

```

## Fields available to import

```js

id - Id of the city (same in openWeatherMap)
name
altName
country
featureCode
adminCode
population
loc: { type: 'Point', coordinates: [0, 0] }

for **GEO JSON data**, a particular format is needed in MongoDB Schema as written in loc field above

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


