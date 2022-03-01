const express = require('express');
const path = require('path');
const app = express();

// link /public to our static assets directory.
// my understanding is static stores images, icons, css, html that isn't changing often
app.use('/public', express.static(path.join(__dirname, 'static')));

const people = require('./routes/people.js');

app.use('/people', people);

// fire up the server on port 9001
app.listen(9001, () => {
	console.log("Server is listening.");
})
