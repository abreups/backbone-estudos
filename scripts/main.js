var object = {};

// extends the functionality of Backbone's events 
// to 'object'
_.extend(object, Backbone.Events);

// adds an event listener to 'object'
object.on("show-message", function(msg) {
	$('#display .listing').text(msg);
});

// we trigger our event
object.trigger("show-message", "Hello World");

