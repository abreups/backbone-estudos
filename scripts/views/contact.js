// This code is related to the individual contact view
App.Views.Contact = Backbone.View.extend({ // extends the built-in Backbone object

	// The 'template' attribute is a Backbone convention for storing the template object
	template: _.template($('#template-contact').html()),
			  $container: null, // will point to the element that Contact views will live inside of

	initialize: function(options) { // is run every time this view is instantiated
		_.bindAll(this, 'render', 'insert'); // overwrites the functionality of render and insert to what we want
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
	}
});


