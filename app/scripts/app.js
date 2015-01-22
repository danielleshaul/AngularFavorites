'use strict';

/**
 * @ngdoc overview
 * @name danielleApp
 * @description
 * # danielleApp
 *
 * Main module of the application.
 */
angular
  .module('danielleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngDialog',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/main.html',
            controller: 'searchController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url : '/favorites',
            templateUrl: 'views/favorites.html',
            controller: 'FavoritesController'
        });

});



