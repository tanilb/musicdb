
const express = require('express');
const app = express();
const Artist = require('./src/models/Artist.js');
const Artists = require('./src/models/Artist.js');

app.get('/artists', function (request, response) {
    let artist = new Artist();
    artist.id = 'Sublime';
    artist.name = 'Sublime';
    artist.startedAt = '1990-01-01';

    response.send([artist]);
});

app.get('/artists/:id', function (request, response) {
    let artist = new Artist();
    artist.id = 'Sublime';
    artist.name = 'Sublime';
    artist.startedAt = '1990-01-01';

    response.send(artist);
});

app.get('/artist', function (request, response) {
    const name = request.query.name || "World";
    response.send({
        message: 'Hello, '+ name +'!'
    });
});

app.get('/albums', function (request, response) {
    const name = request.query.name || "World";
    response.send({
        message: 'Hello, '+ name +'!'
    });
});


app.get('/data', function (req, res) {
    res.sendFile('data.html', { root: '.' });
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('app listening on port ' + port);
});
