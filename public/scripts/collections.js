// --------------------
// Collections
// --------------------

var DishCollection = Backbone.Collection.extend({
	model: Dish,
	url: "/dishes"
});

// instance of the Collection
var menu = new DishCollection();
// menu.fetch();
