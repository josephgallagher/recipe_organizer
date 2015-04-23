'use strict';

angular.module('myApp.recipes', ['ngRoute'])//ngRoute allows us to use $routeProvider

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recipes', {
            //When /recipes is in url^^, load recipes.html template, and make the controller RecipesCtrl for that html page
            templateUrl: 'recipes/recipes.html',
            controller: 'RecipesCtrl'//Points to .controller below
        });
    }])

    //controller for recipes.html
    .controller('RecipesCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
        //Restangular sends 'recipes' as url endpoint to django(to get ALL of them). function takes that JSON to set it to $scope.recipes//
        Restangular.all('recipes').getList().then(function (recipes) {
            $scope.recipes = recipes;
        });
    }]);


//.controller('RecipesCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
//    $scope.getRecipes = function() {
//        Restangular.all('recipes').getList().then(function (recipes) {
//          $scope.recipes = recipes;
//    });
//    };
//}]);