'use strict';

angular.module('danielleApp').factory('searchService', function Search($http) {

  var SerachResults = [];
  return {

    searchTracks: function searchTracks(query, callback) {
      SerachResults = [];
      $http.get('https://api.spotify.com/v1/search', {params: {q: query, type: 'track', limit: '50'}})
        .success(function (data) {
          var objects = data.tracks.items;
          angular.forEach(objects, function (obj) {
            SerachResults.push({'name': obj.name, 'artists': obj.artists, 'checked': 'false', 'comment': ''});
          });
          callback(null, SerachResults);
        })
        .error(function (e) {
          callback(e);
        });
    },
    getSearchResults: function() {
      return SerachResults;
    }
  };
});
