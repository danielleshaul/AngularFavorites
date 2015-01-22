'use strict';

/**
 * @ngdoc function
 * @name danielleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the danielleApp
 */
angular.module('danielleApp')
  .controller('searchController', function searchController($scope, searchService, favoriteService) {
    var vm = this;
    vm.title = 'Select your favorites from spotify';
    $scope.checked = false;
    $scope.tracks = searchService.getSearchResults();

    $scope.executeSearch = function executeSearch() {
      searchService.searchTracks($scope.query, function (error, data) {
        if (!error) {
          $scope.tracks = data;
        }
      });
    };

    $scope.checkedChanged = function checkedChanged(data) {
      if (data.checked) {
        favoriteService.add(data);
        }
      else {
        favoriteService.remove(data);
        }
    };

      vm.orders = [
        {
          id: 1,
          title: 'Track Ascending',
          key: 'name',
          reverse: false
        },
        {
          id: 2,
          title: 'Track Descending',
          key: 'name',
          reverse: true
        }
      ];
  });
