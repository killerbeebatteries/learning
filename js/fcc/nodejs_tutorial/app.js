/*
// testing a module we downloaded using npm install.
const _ = require('lodash');

let example =_.fill([1,2,3,4,5], "banana", 1, 4);

console.log(example);

*/

// lets try Express.
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req,res) => {
	res.send('Hello World');
});

app.get('/example', (req, res) => {
	res.send('hitting example route');

});

// route parameters; name and age.
app.get('/example/:name/:age', (req, res) => {
	console.log(req.params);
	console.log(req.query);
	res.send(req.params.name + ' : ' + req.params.age);

});

// Notes:
// 	Use route parameters when the parameter is mandatory (must have it for the app to function).
// 	Use a query string (url?parm1=something&param2=somethingelse) when the parameters are optional.

// example of using static files
app.use('/public', express.static(path.join(__dirname, 'static')));
app.get('/another_example', (req, res) => {
	res.sendFile(path.join(__dirname, 'static', 'index.html'));

});

app.listen(9001);
