// This code is related to our main application view
App.Views.Directory = Backbone.View.extend({ // extends the Backbone View object
	events: {
		'click .controls .add': 'addForm',
		'submit .controls form': 'addSubmit'
	},

	initialize: function() {
		_.bindAll(this, 'render', 'addForm', 'addSubmit'); // overwrites the functionality of the listed events
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
	},

	addForm: function() {
		this.$('.controls form').show().find('input.firstName').focus();
	},

	addSubmit: function(event) {
		event.preventDefault();
		var $form = this.$('.controls form');
		var newContact = new App.Models.Contact({
			firstName: $('input.firstName', $form).val(),
			lastName: $('input.lastName', $form).val(),
			phoneNumber: $('input.phoneNumber', $form).val(),
			email: $('input.email', $form).val()
		});

		if (newContact.isValid()) {
			App.Contacts.add(newContact);
			$form.hide();
			$('input[type=text]', $form).val('').blur();
		} else {
			alert(newContact.validationError);
		}
	}
});

