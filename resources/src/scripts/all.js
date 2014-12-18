// jQuery inladen
var $ = require('jquery');

// Module
var greetings = require('./greeting');
console.log( greetings('Joris') );

var name = require('./name');
console.log( name('Henkie Penkie').firstName() );