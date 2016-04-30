"use strict";

var app = angular.module("pokemonAPI", ["ui.router"]);


app.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state("home", {
		url: "/",
		templateUrl: "/partials/home.html",
		controller: "pokeHomeCtrl"
	})
	.state("detail", {
		url: "/detail/:id",
		templateUrl: "/partials/detail.html",
		controller: "detailCtrl",
		resolve: {
			poke:
				function (PokeServices, $stateParams) {
					// return $stateParams.pokeId;
					console.log("module poke ID:", $stateParams.id);
					
					return PokeServices.catch1($stateParams.id);
				}
		}
	})
	$urlRouterProvider.otherwise("/");
});