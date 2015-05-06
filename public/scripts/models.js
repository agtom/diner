// --------------------
// Models
// --------------------

var Dish = Backbone.Model.extend({
// if you see a Dish, we need to know what dish to go to (via url)
	urlRoot: '/dishes',
	validation: {
    	name: {required: true, msg: 'Please enter a valid name'},
    	price: {required: true}
	}
});