// This code is related to the individual contact view
App.Views.Contact = Backbone.View.extend({ // extends the built-in Backbone object

	// The 'template' attribute is a Backbone convention for storing the template object
	template: _.template($('#template-contact').html()),
			  $container: null, // will point to the element that Contact views will live inside of

	// Backbone convention for which events to listen for and which methods
	// to execute when they are triggered.
	events: {
		'click .delete': 'remove'
	},

	initialize: function(options) { // is run every time this view is instantiated
		_.bindAll(this, 'render', 'insert', 'remove'); // overwrites the functionality of the listed events
		this.$container = options.$container;
		this.listenTo(this.model, 'change', this.render);
		this.insert();
	},

	// render() method = convention of Backbone
	// Executed every time we want our View to update its DOM element
	render: function() {
		// $el is a Backbone convention for storing a reference to the 
		// current Views of DOM element.
		this.$el.html(this.template(this.model.attributes));
		return this; // returns a reference to the object to make chaining easier
	},

	insert: function() {
		this.$container.append(this.$el); // appends our element to the container element
	},

	remove: function() {
		App.Browser.navigate('contacts/remove/' + this.model.get('id'));
		this.model.destroy(); // 'destroy' is provided by Backbone
	}
});


