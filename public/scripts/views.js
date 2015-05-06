// --------------------
// Views
// --------------------

// just like with models and collections, you are tapping into Backbone's view methods

var DishView = Backbone.View.extend({
	el: "#main",
	template: _.template($("#showDish").html()),
    events: { 
    	"click button#deleteButton": "deleteDish",
        "click button#editButton": "editDish",
         "click button#newButton": "newDish",
    },

// delete dish from the database and triggers remove event on collection
	deleteDish:function() {
		this.model.destroy();
	},

	newDish: function() {
		console.log("yello");
		// this.$("div#newDish").show();
	},

	render: function(){
// 'dish' key matches 'dish' in template
// toJSON gives us only the 'attributes' of the model rather than the whole model
		this.$el.html(this.template({dish: this.model.toJSON()}));
		return this;
	}
});

var MenuView = Backbone.View.extend({
	el: "#main",
	template: _.template($("#showAllDishes").html()),
	events: {
		"click button.newButton": "newDish",
	},


	initialize: function() {
// MenuView will listen to changes to the collection
		this.listenTo(this.collection, "sync remove change", this.render);
	},
	render: function() {
				this.$el.html(this.template({dish: this.collection.toJSON()}));
		return this;
	},

	newDish: function() {

		console.log("yello");
		// this.$("div#newDish").show();
	}

});



var EditDishView = Backbone.View.extend({
	el: "#main", // bind to edit dish form
	template: _.template($("#editDish").html()),
	events: { 
        "click input#editDish": "updateDish"
    },

	updateDish: function() {
		
		var newName = this.$("#dishName" + this.model.id).val();
		var newPrice = this.$("#dishPrice" + this.model.id).val();
		var newUrl = this.$("#dishUrl" + this.model.id).val();
		// debugger;
// update the model with those values locally
		this.model.set({name: newName, price: newPrice, image_url: newUrl});
		
// persists the model in the database and triggers sync
		this.model.save();

		// render: this.$el.after('<a href="/dishes/"' + this.model.id);
		
	},

	render: function() {
				this.$el.html(this.template({dish: this.model.toJSON()}));
		return this;
	}

});


 //  var CreateDishView = Backbone.View.extend({
 //    el: "#newDishForm", // bind to add dish form
 //    events: {"click button#updateDish": "createDish"},


    
 //    // creates a new Dish with data from form
 //    createDish: function() {
 //    	el: ".sidebar", // bind to edit dish form
	// 		template: _.template($("#newDish").html()),
	// 	events: { 
 //      		"click input#addNewDish": "newDish"
 //    	},

 //    	render: function() {
	// 		this.$el.html(this.template({dish: this.model.toJSON()}));
	// 	return this;
	// }
 //  });


    


  // new MenuView({collection: menu});
  
  // new CreateDishView({collection: menu});


    //   // grab new name and type from form
    //   var nameField = this.$("#newDishName");
    //   var priceField = this.$("#newDishPrice");
    //   var urlField = this.$("#newDishUrl");
    //   var name = nameField.val();
    //   var price = priceField.val();
    //   var url = urlField.val();

    //   // add new dis to collection, save it to the database, and
    //   // trigger sync event on collection
    //   this.collection.create({name: name, price: price, image_url: url});

    //   // resets text fields
    //   nameField.val("");
    //   priceField.val("");
    //   urlField.val("");
    // } // END CreateDishView



