// This code is related to our main application view
App.Views.Directory = Backbone.View.extend({ // extends the Backbone View object

	events: { // event listeners
		'click .controls .add': 'addForm',
		'submit .controls form': 'addSubmit'
	},

	initialize: function() {
		_.bindAll(this, 'render', 'addForm', 'addSubmit', 'AddFormHide'); // overwrites the functionality of the listed events
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
		App.Browser.navigate('contacts/add');
		// show() torna os campos de 'form' visíveis
		// e focus() coloca o foco no campo de firstName.
		this.$('.controls form').show().find('input.firstName').focus();
	},

	AddFormHide: function() {
		App.Browser.navigate('contacts');
		this.$('.controls form').hide();
	},

	addSubmit: function(event) {
		event.preventDefault(); // faz o browser não submeter nada, senão a one page app não funcionaria
		var $form = this.$('.controls form'); // pega os elementos do form e guarda numa variável local

		// cria um novo contato (Model) mas ainda não coloca na Collection
		// "It is just an orphaned Model for now"
		var newContact = new App.Models.Contact({
			firstName: $('input.firstName', $form).val(),
			lastName: $('input.lastName', $form).val(),
			phoneNumber: $('input.phoneNumber', $form).val(),
			email: $('input.email', $form).val()
		});

		if (newContact.isValid()) { // se o contato é válido (tem o firstName)
			App.Contacts.add(newContact); // adiciona à lista de contatos
			newContact.save();Contact.save();
			this.AddFormHide(); // esconde os campos de entrada de dados
			$('input[type=text]', $form).val('').blur(); // blur() remove o foco dos input fields
		} else {
			alert(newContact.validationError);
		}
	}
});

