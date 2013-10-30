function hello(){
	this.sayhello = function(){
		console.log("hello");
	};
};
module.exports = hello;
