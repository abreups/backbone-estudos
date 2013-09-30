// Defines the Model for Contacts.
// Note que 'App.Models.Contact' é globally accessible (não tem 'var' na frente)
App.Models.Contact = Backbone.Model.extend({
	defaults: {
		firstName: '',
		lastName: '',
		phoneNumber: '<UNLISTED>',
		email: '<UNLISTED>'
	},

	validate: function(attrs, options) { // é chamado por Model.isValid()
		if (!attrs.firstName) { // se retornar um valor qualquer significa que validação falhou
			return "A valid contact must have a first name";
		}
	},

	// This method is executed each time a new Contact Model is instantiated.
	initialize: function(attributes) { // 'attributes' não contém valores de 'defaults'!
		var firstName = attributes.firstName || '<EMPTY>';
		var lastName = attributes.lastName || '<EMPTY>';
		console.log("Initializing a new contact model for" +
			firstName + " " + lastName + "'.");
	}
});

