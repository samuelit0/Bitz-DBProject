module.exports = { 
	Bids : function (bider, seller, product, amount, picture){
	this.biderId = bider;
	this.sellerId = seller;
	this.productId = product;
	this.bidAmount = amount;
	this.bidPicture = picture; 		//no va en tablas. 
	
}
};