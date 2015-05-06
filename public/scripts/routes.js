// when you go to dishes/:anId you trigger the showDish function which identifies the dish you want to fetch. then you fetch from the server (AJAX request) and pass to DishView (in views.js) which renders the dish using the template in your html

var DishRoutes = Backbone.Router.extend({
	routes: {
		"dishes": "allDishes",
		"": "allDishes",
		// Backbone likes plurals
		"dishes/:anId": "showDish",
		"dishes/:anId/edit": "editDish",
	},

	showDish: function(anId){
// variable thisDish is equal to an object with the id from the url
		var thisDish = new Dish ({id: anId});
// fetch gets the dish data from the db and fills in thisDish
		thisDish.fetch({
// on success pass thisDish into DishView
			success: function(){
				new DishView({model: thisDish}).render();
			}
		});
	},

	editDish: function(anId){
	// var ul = document.getElementById("allDishes");
	// ul.innerHTML = "";
		var thisDish = new Dish ({id: anId})
		thisDish.fetch({
// on success pass thisDish into DishView
			success: function(){
// model links to model on line 12 of views
				new EditDishView({model: thisDish}).render();
			}
		});
	},

	allDishes: function() {
		menu.fetch({
			success: function(){
				new MenuView({collection: menu}).render();
			}
		})
	}
})


// instantiate a new DishRoutes
var dishRoutes = new DishRoutes();

Backbone.history.start();

	// allDishes: function() {
	// 	menu.fetch({
	// 		success: function(model, response) {
	// 			var viewDish = document.getElementById("viewDish");
	// 			viewDish.innerHTML = "";
	// 			var allDishes = document.getElementById("allDishes");
	// 			allDishes.innerHTML = "";

	// 			// debugger;
	// 			response.forEach(function(dish){
	// 				var div = document.createElement('div');
	// 				var a = document.createElement('a');
	// 				div.setAttribute("class", "image");
	// 				a.href = "#dishes/" + dish.id;
	// 				a.innerHTML = '<img src="' + dish.image_url + '">';
	// 				// a.innerText = dish.name;
	// 				div.appendChild(a);
	// 				allDishes.appendChild(div);	
	// 			})
	// 		}
	// 	})
	// }

