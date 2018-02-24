const cities = require('all-the-cities-mongodb')

cities.filter(city => {
  if(city.name.match('Lahore')){
    console.log(city)
  }
})

// [{
//   name: 'Albuquerque',
//   country: 'US',
//   featureCode: 'PPLA2',
//   adminCode: 'NM',
//   population: 545852,
//   lat: 35.08449,
//   lon: -106.65114
// }, {
//   name: 'Los Ranchos de Albuquerque',
//   country: 'US',
//   featureCode: 'PPL',
//   adminCode: 'NM',
//   population: 6024,
//   lat: 35.16199,
//   lon: -106.6428
// }]
