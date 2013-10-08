/*
var userList = new Array(
	//new User("3421","Samuel","Feliciano", "samuel.feliciano@upr.edu", "samuel","7874245985","123456789","000111222"),
	//new User("1749","Bob","Ned", "bobby.neddy@upr.edu", "Bobsome","7875555555","987654321","777444222")	
);

var ordersList = new Array(
	//new Order("o5647", "1749", "1122","9776","50.99","bank","a8897","i8765"),
	//new Order("o4556","3421", "7654","9665","130.99","creditcard","a2231","i0000")
);

var addressList = new Array(
	//new Address("1749","a8897","Barrio Pasto","Playita","Aibonito","Puerto Rico", "00705");
	//new Address("3421","a2231","Levitown","Cafre","Toa Baja", "Puerto Rico", "00949");
);

var categoriesList = new Array(
	new Category("Electronics"),
	new Category("Books"),
	new	Category("Computer")
);

var reportsList = new Array(
	//new Report("r4545","Pompin","01012011","1000.00","1050.00","800.00"),
	//new Report("r7711","Lully","02022012","8000.00","350.00","9990.00")
);

var invoiceList = new Array(
	//new Invoice("i0000","o5647","12011990","12.50","5567","h0001"),
	//new Invoice("i2356","o4556","10232011","100.50","7762","h0003"),
	//new Invoice("i7686","o9980","08151998","56.89","2651","h0005"),
	//new Invoice("i6548","o5634","02172004","230.66","2222","h0002"),
);


var historiesList = new Array(
	//new History("h0000","3421"),
	//new History("h0001","1122"),
	//new History("h0002","7654"),
	//new History("h0003","9987"),
);

	
var cartsList = new Array(
	//new Cart("01111","3421"),
	//new Cart("03456","6789"),
	//new Cart("07432","1122"),
	//new Cart("09967","9987"),

);

	
var ratingsList = new Array(
	new Rates("Joe","you","5"),
	new Rates("Xi", "you", "3"),
	new Rates("Jil","you","2"),
	new Rates("Arelis", "you", "1"),
	new Rates("Bob","you","4"),
	new Rates("Ned", "you", "3")			
);

	
var banksList = new Array(
	//new Bank("000111222","Banco Popular","001122"),
	//new Bank("222111000","First Bank","778866"),
	//new Bank("777444222","Oriental Bank","993322"),
	//new Bank("333555000","Chase","558855")
);

var creditsCardsList = new Array(
	//new CreditCard("789789","Master Card","122016","333"),
	//new CreditCard("980980","Visa","032015","456"),
	//new CreditCard("654321","Master Card","082017","987"),
	//new CreditCard("246246","Visa","012014","999")
);

var administratorsList = new Array(
	//new Administrator("Lully","Many","lully.many@gmail.com","lullabuy"),
	//new Administrator("Pompin","Very","pompin.very@gmail.com","pompis"),
	//new Administrator("Bombili","Fray","bombili.fray@gmail.com","bombom"),
	//new Administrator("Yayis","Liza","yayis.liza@gmail.com","yalis")
);

var prodList2 = new Array(
	new Product("Apu","9000","Macbook", "$1,999.00", "$300.00", "2:58", "Pro", "Apple", "Cool!", "http://4.bp.blogspot.com/-4b7z_XskJ3c/T2V3InNkhRI/AAAAAAAABvU/-fo-sVq_Wdo/s1600/MacBookPro.jpg" ,"15 inch", "Laptops"),
	new Product("Jil","9001","Iphone","$500.00", "$10.00", "5:43", "4", "Apple", "Boo!", "http://www6.pcmag.com/media/images/301505-apple-iphone-5-at-t.jpg" ,"4 inch", "Phones")	
);*/
//************************************
//			Productos
//************************************
$(document).on('pagebeforeshow',"#products", function( event, ui) {
		
	$.ajax({
		url : "http://localhost:3412/Proyecto1Server/product",
		contentType : "application/json",
		success : function(data, textStatus, jqXHR){
			var prodList = data.products;
			var len = prodList.length;
			var list = $("#prods-list");
			list.empty();
			var prod;
			for (var i=0; i < len; ++i){
				prod = prodList[i];	
				list.append("<li><a onclick=GetProduct(" + prod.prodId + ")>" +
				    "<img src="+ prod.photo + " >" +
					"<h3>" + prod.name + " " + prod.model + "</h3>" +			
					"<p>Buy It Now: " + prod.instantPrice + "<br> Bid Price: " + prod.bidPrice + "</p>" + 			
					"<p class=\"ui-li-aside\"><strong><br><br> Time Left: " + prod.bidTime + "</strong><br>" + "Seller: "+ prod.userId+"</p></a>"+
					"</li>");
			}
			list.listview("refresh");
		},
		error: function(data, textStatus, jqXHR){		
			console.log("textStatus: " + textStatus);
			alert("TEST: Product not found!");
		}
	});
});

//************************************
//			BIDS
//************************************
$(document).on('pagebeforeshow',"#MyBids", function( event, ui) {
	$.ajax({
		url : "http://localhost:3412/Proyecto1Server/biding",
		contentType : "application/json",
		success : function(data, textStatus, jqXHR){
			var bidList = data.bidings;
			var len = bidList.length;
			var list = $("#bids-list");
			list.empty();
			var bid;	
			for (var i=0; i < len; ++i){
				bid = bidList[i];			
				list.append("<li><img src="+ bid.bidPicture + " >" +
					"<h3> Bider: " + bid.biderId + " <br> Seller: " + bid.sellerId + "</h3>" +			
					"<p>Item: " + bid.productId + " <br>Bid: " + bid.bidAmount + "</p>"+			
					"</li>");
			}
			list.listview("refresh");
		},
		error: function(data, textStatus, jqXHR){		
			console.log("textStatus: " + textStatus);
			alert("TEST: Product not found!");
		}
	});
});

//************************************
//			Ratings
//************************************

$(document).on('pagebeforeshow',"#MyRatings", function( event, ui) {
	$.ajax({
		url : "http://localhost:3412/Proyecto1Server/rating",
		contentType : "application/json",
		success : function(data, textStatus, jqXHR){
			var	ratingList = data.ratings;
			var len = ratingList.length;
			var list = $("#ratings-list");
			list.empty();
			var rate;
			for (var i=0; i < len; ++i){
				rate = ratingList[i];
				list.append("<li>" +
					"<p style=\"font-family:centurygothic;color:black;font-size:17px;text-align:center;\"> <br>" + rate.userId + " gave " + 
					rate.ratedUser + " <i> " + rate.rating +"</i> stars!</p>" +
				"</li>");		
				}	
			list.listview("refresh");	
		},
		error: function(data, textStatus, jqXHR){		
			console.log("textStatus: " + textStatus);
			alert("TEST: Product not found!");
		}
	});
});



var currentProd = {};

function GetProduct(prodId){
	$.mobile.loading("show");
	$.ajax({
		url : "http://localhost:3412/Proyecto1Server/product" + prodId,
		method: 'get',
		contentType: "application/json",
		dataType:"json",
		success : function(data, textStatus, jqXHR){
			currentProd = data.products;
			$.mobile.loading("hide");
			$.mobile.navigate("#prod-view");
		},
		error: function(data, textStatus, jqXHR){
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			if (data.status == 404){
				alert("HERE: Product not found.");
			}
			else {
				alter("Internal Server Error.");
			}
		}
	});
}


//************************************
// Products view
//************************************
$(document).on('pagebeforeshow',"#prod-view", function( event, ui) {

	var list = $("#prod-view-list");
	list.empty();
	var prod = currentProd;

		list.append("<li><h3 style=text-align:center>" + prod.name + " " + prod.model + "</h3>" +
			"<center> <img src=" + prod.photo + " border=1 height=150 weight=150 ></center><br>" +
			"<b>Seller:</b> " + prod.userId + "<br><br>"+
			"<b>Price: </b>" + prod.instantPrice + "<br> <b>Bid Price: </b>"+ prod.bidPrice +
			"<br> <b>Bid Time: </b>" + prod.bidTime + "<br><br>" +
			"<b>Brand: </b>" +prod.brand + "<br> <b>Category: </b>"+ prod.category +"<br>" +
			"<b>Description: </b>" +prod.description + "<br> <b>Dimensions: </b>"+ prod.dimension +
			"<br><br></li>");
			
		list.listview("refresh");
});



/*
function ConverToJSON(formData){
	var result = {};
	$.each(formData, 
		function(i, o){
			result[o.name] = o.value;
	});
	return result;
}
/*

var currentProd = {};

function GetProduct(id){
	$.mobile.loading("show");
	$.ajax({
		url : "http://localhost:3412/Proyecto1Server/tables" + id,
		method: 'get',
		contentType: "application/json",
		dataType:"json",
		success : function(data, textStatus, jqXHR){
			currentProd = data.product;
			$.mobile.loading("hide");
			//$.mobile.navigate("#prod-view");
		},
		error: function(data, textStatus, jqXHR){
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			if (data.status == 404){
				alert("Product not found.");
			}
			else {
				alter("Internal Server Error.");
			}
		}
	});
}

*/
/*




//************************************
//			Categories
//************************************
$(document).on('pagebeforeshow',"#ManageCategories", function( event, ui) {
	var len = categoriesList.length;
	var list = $("#categ-list");
	list.empty();
	var cat;
	for (var i=0; i < len; ++i){
		cat = categoriesList[i];	
	
		list.append("<li>" +"<h3>"+ cat.categoryName +"</h3>"+
			"</li>");
	}
	list.listview("refresh");
});
*/


