//Invocar modo JavaScript 'strict'

'use strict';
//Crear el controller 'ticket'
var App = angular.module('App', []);

App.controller("Ctrl", function($scope){
		$scope.datos = [
		{"name":"Ariel", "email":"ariel@safas.com", "track":"1", "roll":"2222", "division":"US", "district":"33"},
		{"name":"Maria", "email":"maria@safas.com", "track":"1", "roll":"2222", "division":"US", "district":"33"},
		{"name":"Masser", "email":"masser@safas.com", "track":"1", "roll":"2222", "division":"US", "district":"33"}

		]


	});
