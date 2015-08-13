'use strict';

var url = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=649e900ceb3111d0f58b376c3738da13&per_page=10&page=2&format=json&jsoncallback=JSON_CALLBACK";

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope,$http) {
      $http.jsonp(url).
          success(function(data){
console.log(data);
            $scope.photos=data.photos.photo;
          }).
          error(function() {
//console.log('error');
          });
    });