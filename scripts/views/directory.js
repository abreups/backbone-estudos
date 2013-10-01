// This code is related to our main application view
App.Views.Directory = Backbone.View.extend({ // extends the Backbone View object
	initialize: function() {
		_.bindAll(this, 'render'); // overwrites the functionality of render to what we want
	},

	render: function() {
		// first thing is to clear out the existing elements
		// When run for the first time it removes the "Houston we have a problem" text
		var $container = this.$('.listing').empty();

		// Lembre-se que App é nossa variável global e 'App.Contacts' são os contatos guardados nela
		App.Contacts.each(function(contact) { // iterates over each contact of the collection
			new App.Views.Contact({ // instantiate a new view for each contact
				model: contact, // 'contact' é o parâmetro passado na chamada da função
				$container: $container
			}).render(); // makes each element visible in the DOM
		});

		return this;
	}
});

