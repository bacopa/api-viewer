"use strict";

var app = angular.module("pokemonAPI");

app.controller("pokeHomeCtrl", function ($scope, $state, PokeServices) {

		$scope.pokemonArr = [];
		PokeServices.catch5(function (data) {
			$scope.pokemonArr = data;
		});
		


});

app.controller("detailCtrl", function ($scope, poke, PokeServices, $state) {
	
	console.log("***************", $state.params.id);


	PokeServices.catch1($state.params.id).then(function (res) {
		console.log("RES", res);
		$scope.pokemon = res.data;
	});
	// console.log(PokeServices.catch1(1));

});