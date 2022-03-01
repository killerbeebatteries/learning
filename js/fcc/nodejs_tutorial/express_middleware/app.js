const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// link /public to our static assets directory.
// my understanding is static stores images, icons, css, html that isn't changing often
app.use('/public', express.static(path.join(__dirname, 'static')));

// not entirely sure what is going here, will need to read up on it. I think it's a safety thing?
app.use(bodyParser.urlencoded({extended: false}));

// we want to return json, not html.
app.use(bodyParser.json());

// doing stuff with the request, response and our next... object?
/*
app.use('/example', (req, res, next) => {

	console.log(req.url, req.method);
	next();	

});
*/

// this is run for all routes, as we haven't specified a route like we did with /example above.
app.use((req, res, next) => {

	//console.log(req.url, req.method);
	req.banana = 'banana';
	next();	

});


// respond to "/" GET requests
app.get('/', (req, res) => {
	console.log(req.banana);
	res.send('Active Middleware');

});

// fire up the server on port 9001
app.listen(9001, () => {
	console.log("Server is listening.");
})
