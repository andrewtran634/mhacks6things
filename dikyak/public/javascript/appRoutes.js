angular.module('appRoutes',[]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		templateUrl: 'views/home.html'
	})
	.when('/mine/:userid', {
		controller: 'MineController',
		templateUrl: 'views/mine.html'
	})
    .when('/deets/:id', {
        controller: 'DeetsController',
        templateUrl: 'views/deets.html'
    })
	.when('/settings', {
		controller: 'SettingsController',
		templateUrl: 'views/settings.html'
	})

	.otherwise({
		redirectTo: '/'
	});
}]);
                                       
                                    