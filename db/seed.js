var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("diner.db");
db.run("INSERT INTO dishes (name, price, image_url) VALUES (?, ?, ?)", "Soup", 9.99, "http://www.averagebetty.com/images/tortilla_soup_420_2spoons.jpg", function(err){
  if(err) {
    throw err;
  }
});
db.run("INSERT INTO dishes (name, price, image_url) VALUES (?, ?, ?)", "Sandwich", 4.99, "http://www.grotecompany.com/wp-content/uploads/2009/12/sandwich-production.jpg", function(err){
  if(err) {
    throw err;
  }
});