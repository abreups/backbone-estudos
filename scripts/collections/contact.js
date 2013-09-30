App.Collections.Contact = Backbone.Collection.extend({
	// tells the Collection that it will contain a listing 
	// of Contacts Models.
	// Para isso funcionar, o código do Model tem que ter sido
	// previamente carregado! (RequireJS resolveria isso!)
	model: App.Models.Contact
});

