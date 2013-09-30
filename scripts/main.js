var App = {
	Models: {},
	Collections: {},
	Contacts: null
};

$(function() { // Run this code when the DOM is ready
	window.tom = new App.Models.Contact({
		firstName: 'Thomas', lastName: 'Hunter', phoneNumber: '9895135499', email: 'me@thomashunter.name'
	});

	App.Contacts = new App.Collections.Contact();


	// Add three different contacts
	App.Contacts.add(window.tom);
	App.Contacts.add({
		firstName: 'Rupert', lastName: 'Styx', phoneNumber: '9895551212', email: 'rupertstyx@example.com'
	});
	App.Contacts.add({});


	var contactListing = '';

	// Para cada um dos 3 contatos adicionados:
	// 'contact' recebe o model da collection para cada iteração
	App.Contacts.each(function(contact) {
		contactListing += "<div>" + contact.get('firstName') + " " + contact.get('lastName') + " ";
		if (contact.isValid()) { // roda a função Validate do model.
			contactListing += "(valid)";
		}
		else {
			contactListing += "(invalid)";
		}
		contactListing += "</div>";
	});

	// display na div com id='display'
	$('#display').html(contactListing);

});


