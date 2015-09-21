angular.module('picsService', []).factory('picsService', ['$http', function($http) {
	return {

		get: function() {
			return $http.get('/pics');
		},

		create: function(picData) {
			return $http.post('/pics', picData);
		},

		delete: function(id) {
			return $http.delete('/pics/' + id);
		}
	}
}]);