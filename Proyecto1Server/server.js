// Express is the web framework 
var express = require('express');
var app = express();
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.configure(function () {
  app.use(allowCrossDomain);
});


app.use(express.bodyParser());

var prod = require("./product.js");
var Product = prod.Product;

var bid = require("./biding.js");
var Bids = bid.Bids;

var rating = require("./rating.js");
var Rates = rating.Rates;


var prodList = new Array(
	new Product("Apu","9000","Macbook", "$1,999.00", "$300.00", "2:58", "Pro", "Apple", "Cool!", "http://4.bp.blogspot.com/-4b7z_XskJ3c/T2V3InNkhRI/AAAAAAAABvU/-fo-sVq_Wdo/s1600/MacBookPro.jpg" ,"15 inch", "Laptops"),
	new Product("Jil","9001","Iphone","$500.00", "$10.00", "5:43", "4", "Apple", "Boo!", "http://www6.pcmag.com/media/images/301505-apple-iphone-5-at-t.jpg" ,"4 inch", "Phones")	
);

var bidList = new Array(
	new Bids("Joe","Apu", "9000", "$500.00", "http://4.bp.blogspot.com/-4b7z_XskJ3c/T2V3InNkhRI/AAAAAAAABvU/-fo-sVq_Wdo/s1600/MacBookPro.jpg"),
	new Bids("Xi","Jil", "9001", "$100.00","http://www6.pcmag.com/media/images/301505-apple-iphone-5-at-t.jpg")
		
);

var ratingList = new Array(
	new Rates("Joe","you","5"),
	new Rates("Xi", "you", "3"),
	new Rates("Jil","you","2"),
	new Rates("Arelis", "you", "1"),
	new Rates("Bob","you","4"),
	new Rates("Ned", "you", "3")			
);

var prodNextId = 0;
 
for (var i=0; i < prodList.length; ++i){
	prodList[i].prodId = prodNextId++;
}
 


// REST Operation - HTTP GET to read all products
app.get('/Proyecto1Server/product', function(req, res) {
	console.log("GET PRODUCT");
	var response = { "products" : prodList };
  	res.json(response);
});


// REST Operation - HTTP GET to read a product based on its id
app.get('/Proyecto1Server/product:prodId', function(req, res) {
	var prodId = req.params.prodId;
		console.log("GET product id: " + prodId);

	if ((prodId < 0) || (prodId >= prodNextId)){
		// not found
		res.statusCode = 404;
		res.send("Product not found.");
	}
	else {
		var target = -1;
		for (var i=0; i < prodList.length; ++i){
			if (prodList[i].prodId == prodId){
				target = i;
				break;	
			}
		}
		if (target == -1){
			res.statusCode = 404;
			res.send("Product not found.");
		}
		else {
			var response = {"products" : prodList[target]};
  			res.json(response);	
  		}	
	}
});


// REST Operation - HTTP GET to read all bids
app.get('/Proyecto1Server/biding', function(req, res) {
	console.log("GET BID");
	var response = { "bidings" : bidList };
  	res.json(response);
});

// REST Operation - HTTP GET to read all ratings
app.get('/Proyecto1Server/rating', function(req, res) {
	console.log("GET RATING");
	var response = { "ratings" : ratingList };
  	res.json(response);
});


app.listen(process.env.PORT || 3412);
console.log("server listening 3412");
