'use strict';


angular.module('danielleApp').service('favoriteService',function favoriteSongs(){
  var Favorites = [];

  this.add = function (favorite)
  {
    Favorites.push(favorite);
    return Favorites;
  },

    this.remove = function(favorite)
    {
      Favorites.splice(Favorites.indexOf(favorite), 1);
      return Favorites;
    },

    this.getList = function()
    {
      return Favorites;
    }
} );
