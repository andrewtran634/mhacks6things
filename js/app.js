var app = angular.module('dikyak' ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		templateUrl: 'view/home.html'
	})
	.when('/mine', {
		controller: 'MineController',
		templateUrl: 'view/mine.html'
	})
	.when('/settings', {
		controller: 'SettingsController',
		templateUrl: 'view/settings.html'
	})

	.otherwise({
		redirectTo: '/'
	});
});