FW = FW || {};
var $ = require('jquery');

// Modules
FW.greetings = require('./greeting');
console.log( FW.greetings('Joris') );

FW.name = require('./name');
console.log( FW.name('Henkie Penkie').firstName() );
