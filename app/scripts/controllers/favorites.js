'use strict';

/**
 * @ngdoc function
 * @name danielleApp.controller:FavoritesController
 * @description
 * # FavoritesController
 * Controller of the danielleApp
 */
angular.module('danielleApp')
  .controller('FavoritesController', function FavoritesCtrl($scope, favoriteService, ngDialog) {
    $scope.favorites = favoriteService.getList();
    $scope.specificTrack = {};

    $scope.removeFavorite =function removeFavorite(data){
        data.checked=false;
        data.comment='';
        favoriteService.remove(data);
    },

  $scope.addComment = function addComment(data){
        $scope.specificTrack = data;
        console.log($scope);
        $scope.openDialogId =
            ngDialog.open({
                template: '<span class="row"></span><form role="form" ng-submit="closeThisDialog(0)"><div class="row"><div class="input-group"><input type="text" placeholder="You Comment Goes here" ng-model="specificTrack.comment" class="form-control"><span class="input-group-btn"><input type="submit" class="btn btn-primary" value="Add"></span></div></div></form>',
                className: 'ngdialog-theme-default',
                plain: true,
                scope: $scope
        });
    }
});
