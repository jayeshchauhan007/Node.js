const {parse} = require('csv-parse');
const fs = require('fs');

function isHabitablePlanets(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}
const results = [];
fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        if (isHabitablePlanets(data)) {
            results.push(data);
        }
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(results);
        console.log(results.map((planet) => {
            return planet['kepler_name'];
        }));
        console.log(results.length + ' Habitable Planets found.');
        console.log('done');
    });