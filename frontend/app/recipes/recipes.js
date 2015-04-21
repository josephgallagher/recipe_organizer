'use strict';

angular.module('myApp.recipes', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recipes', {
            templateUrl: 'recipes/recipes.html',
            controller: 'RecipesCtrl'
        });
    }])

    .controller('RecipesCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
        Restangular.all('recipes').getList().then(function (recipes) {
            $scope.recipes = recipes;
        });
        }]);





    //.controller('RecipesCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
    //    $scope.getRecipes = function() {
    //        Restangular.all('recipes').getList().then(function (recipes) {
    //        $scope.recipes = recipes;
    //    });
    //    };
    //}]);