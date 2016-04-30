"use strict";

var app = angular.module("pokemonAPI");

app.service("PokeServices", function ($http) {
	

	function get5Numbers(){

		var arr = [];
		for(var i = 0; i < 5; i++){
			arr.push(Math.floor((Math.random() * 718) + 1));
		}
		return arr;
	}

	this.catch5 = function(cb){
		var nums = get5Numbers();
		var data = [];
		for(var i = 0; i < nums.length; i++){
			var pokeObj = {};
			pokeObj.img = "http://pokeapi.co/media/img/"+nums[i]+".png"
			pokeObj.id = nums[i]
			data.push(pokeObj)
		}
		console.log(data);
		cb(data);
	}	


	// this.catch1 = function(poke){
	// 	console.log(poke);
	// 	return $http({
	// 		url: "http://pokeapi.co/api/v1/pokemon/"+poke.id,
	// 		method: "GET"
	// 	});
	// }

	this.catch1 = function (id) {
		console.log("catch1", id);

		return $http({
				url: 'http://pokeapi.co/api/v2/pokemon/'+id+'/',
				method: 'GET'
			   });	
	}
})

		



		// return (function (resolve, reject) {
			
		// 		var poke = 

		// 	if(poke){
		// 		resolve(poke);
		// 	} else {
		// 		reject(console.log("PokeId not here! =/ "))
		// 	}
		// }).then
		