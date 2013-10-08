module.exports = { 
	Product : function (seller,cId,name, instantPrice, bidPrice, bidTime, model, brand, description, photo, dimension, category){
		this.prodId = "";
		this.userId = seller;	//""
		this.cartId = cId;		//""
		this.name = name;
		this.instantPrice = instantPrice;
		this.bidPrice = bidPrice;
		this.bidTime = bidTime;
		this.model= model;
		this.brand = brand;
		this.description = description;
		this.photo = photo;
		this.dimension=dimension;
		this.category = category;
		
}
};
/*
function User(uId,nameName, lastName, email, password, phoneNum, ccNumber, bAccountNum){
	this.userId = uId;	//""
	this.userFName = firstName;
	this.userLName = lastName;
	this.uEmal = email;
	this.uPass = password;
	this.uPhoneNum = phoneNum;
	this.ccNumber = ccNumber;
	this.bAccountNum = bAccountNum;
//	this.toJSON = toJSON;
}



function Order(oId, buyer, seller, product, amount, payment, address, inv ){
	this.orderId = oId;		//""
	this.userId = buyer;
	this.sellerId = seller;
	this.productId = product;
	this.totalAmount = amount;
	this.paymentType = payment;
	this.addressId = address;
	this.invoiceNum = inv;	  //""
//	this.toJSON = toJSON;
}


function Address(user, aId, LN1, LN2, city, country, zipcode ){
	this.userId = user;
	this.addressId = aId;	//""
	this.LN1 = LN1;
	this.LN2 = LN2;
	this.city = city;
	this.country = country;
	this.zipCode = zipCode;
	//this.toJSON = toJSON;
}

function Category(category){
	this.categoryName = category;
	//this.toJSON = toJSON;
}

function Report(rId,admin,date,totalrevenue,totalsales,allsales){
	this.reportId = rId; 	//""
	this.adminId = admin;
	this.reportDate = date;
	this.totalRevenues = totalrevenues;
	this.totalSales = totalSales;
	this.allSales = allSales;
	//this.toJSON = toJSON;
}


function Invoice(number, order, day, total, product, history){
	this.invoiceNum = number;
	this.orderId = order;
	this.invoiceDate = day;
	this.invoiceTotal = total;
	this.productId = product;
	this.historyId = history;
	//this.toJSON = toJSON;
}

function History(hId,user){
	this.historyId = hId;	//""
	this.userId = user;
	//this.toJSON = toJSON;
}

function Cart(cart, user){
	this.cartId = cart;
	this.userId = user;
	//this.toJSON = toJSON;
}



function Bank(account, bankname, routing){
	this.bAccountNum = account;
	this.bankName = bankname;
	this.bRoutingNum = routing;
	//this.toJSON = toJSON;
}

function CreditCard(number, company, expires, securecode){
	this.ccNumber = number;
	this.ccCompany = company;
	this.ccExpDate = expires;
	this.SecCode = securecode;
	//this.toJSON = toJSON;
}

function Administrator(firstname, lastname, email, password){
	this.admFName = firstname;
	this.admLName = lastname;
	this.admEmail = email;
	this.admPass = password;
	//this.toJSON = toJSON;
}
*/
