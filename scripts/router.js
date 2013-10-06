App.Routers.Contact = Backbone.Router.extend({ // extends the built-in Backbone router object
	
	// Define the routes
	routes: {
		'contacts' : 'contacts',
		'contacts/add' : 'contactsAdd',
		'contacts/remove/:id' : 'contactsRemove' // id é uma string desde que não seja '/'
	},

	contacts: function() {
		App.Directory.render();
		App.Directory.addFormHide();
	},

	contactsAdd: function() {
		App.Directory.addForm();
	},

	contactsRemove: function(id) {
		var contact = App.Contacts.get(id);
		if (contact) {
			contact.destroy();
		}
		App.Directory.addFormHide();
	}
});

