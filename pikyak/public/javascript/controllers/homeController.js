var HomeController = angular.module('app').controller('HomeController', ['$scope', 'picsService', function($scope, picsService) {
        $scope.pics = picsService.get();
        console.log($scope.pics);
}]);