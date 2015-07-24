'use strict';

var url="https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=649e900ceb3111d0f58b376c3738da13&per_page=5&format=json&jsoncallback=JSON_CALLBACK";

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope, $http) {
  $http.jsonp(url).
    success(function(data){
      $scope.photos=data.photos.photo;
    }).
    error(function() {
//console.log('error');
    });
}]);