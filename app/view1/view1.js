'use strict';

var url = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=649e900ceb3111d0f58b376c3738da13&per_page=20&page=1&format=json&jsoncallback=JSON_CALLBACK";

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',function($scope, Flickr) {
 $scope.flickr= new Flickr();
})

.factory('Flickr',function($http) {
  var Flickr = function () {
    this.items = [];
    this.busy = false;
    this.page = 0;
  };

  Flickr.prototype.nextPage = function () {
    if (this.busy) return;
    this.busy = true;

    $http.jsonp(url).success(function (data) {
      var items = data.photos.photo;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[u].data);
      }
      this.busy = false;
    }.bind(this));

  };
  return Flickr;
});


