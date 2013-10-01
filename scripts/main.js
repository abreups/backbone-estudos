var App = {
	Models: {},
	Collections: {},
	Views: {}, // para armazenar referências aos Views
	Contacts: null,
	Directory: null // referência para a instância of the main application view
};

$(function() { // Run this code when the DOM is ready
	window.tom = new App.Models.Contact({
		firstName: 'Thomas', lastName: 'Hunter', phoneNumber: '9895135499', email: 'me@thomashunter.name'
	});

	App.Contacts = new App.Collections.Contact();

	// Add contact
	App.Contacts.add(window.tom);

	// Add another contact
	App.Contacts.add({
		firstName: 'Rupert', lastName: 'Styx', phoneNumber: '9895551212', email: 'rupertstyx@example.com'
	});

	App.Directory = new App.Views.Directory({ // performs the Directory View instantiation
		el: $('#display') // passa uma referência ao elemente da DOM que queremos nos atachar
	});

	App.Directory.render(); // faz o render para cada Contact na Contacts Collection

	App.Contacts.on('add remove', function() { // faz render do Directory View para add e remove events
		App.Directory.render();
	});
});


