var fs = require('fs');

var rs = fs.createReadStream('test.html');

rs.on('open', function(){
	console.log('The file is open');
});

var events = require('events');

var eventEmitter = new events.EventEmitter();

// create an event handler
var myEventHandler = function()
{
	console.log('The events had been catched');
}

// assign the event handler to an event
eventEmitter.on('testev', myEventHandler);

//fire the 'testev' event
eventEmitter.emit('testev');