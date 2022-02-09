// testing a module we downloaded using npm install.
const _ = require('lodash');

let example =_.fill([1,2,3,4,5], "banana", 1, 4);

console.log(example);
