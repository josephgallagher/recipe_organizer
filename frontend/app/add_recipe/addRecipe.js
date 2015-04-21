'use strict';

angular.module('myApp.addRecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add_recipe', {
    templateUrl: 'add_recipe/add_recipe.html',
    controller: 'AddRecipeCtrl'
  });
}])

.controller('AddRecipeCtrl', ['$scope', 'Restangular', function($scope, Restangular) {

   $scope.recipe = {
            ingredients: []
   };

   $scope.addIngredientToRecipe = function (ingredientName) {
       if(ingredientName != null) {
           var ingredient = {name: ingredientName};
           $scope.recipe.ingredients.push(ingredient);
           $scope.ingredientName = null
       }
   };

   $scope.removeIngredientFromRecipe = function (ingredient) {
       var index = $scope.recipe.ingredients.indexOf(ingredient);
       if (index != -1) {
           $scope.recipe.ingredients.splice(index, 1); //(index, 3) would remove 3 items starting @f index
       }

   };
   
   
    $scope.addRecipe = function () {
        Restangular.all('add_recipe').customPOST($scope.recipe).then(function(recipe) {
            toastr.success("You successfully added the recipe!");
            $scope.recipe = {};
        }, function(error) {
            toastr.error("There was a problem adding our recipe!");
        });
    };
}]);