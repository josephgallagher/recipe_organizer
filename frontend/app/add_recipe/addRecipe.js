'use strict';

angular.module('myApp.addRecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add_recipe', {
    templateUrl: 'add_recipe/add_recipe.html',
    controller: 'AddRecipeCtrl'
  });
}])

.controller('AddRecipeCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
    $scope.addRecipe = function () {
        Restangular.all('add_recipe').customPOST($scope.recipe).then(function(recipe) {
            alert("Recipe was successfully created! Your recipe's ID is:" + recipe.id)
            $scope.recipe = {};
        }, function(error) {
            alert("There was a problem adding your recipe! See the error: " + error.statusText);
        });
    };
}]);