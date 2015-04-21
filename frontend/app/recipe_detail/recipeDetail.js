'use strict';

angular.module('myApp.recipeDetail', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recipes/:recipeId', {
            templateUrl: 'recipe_detail/recipe_detail.html',
            controller: 'RecipeDetailCtrl'
        });
    }])

    .controller('RecipeDetailCtrl', ['$scope', '$routeParams', '$location', 'Restangular', function ($scope, $routeParams, $location, Restangular) {
        $scope.recipeId = $routeParams.recipeId;
        $scope.editing = false;
        Restangular.one('recipes', $scope.recipeId).customGET().then(function (recipe) {
            $scope.recipe = recipe;
        });

        $scope.deleteRecipe = function () {
            var confirmation = confirm("Are you sure you want to delete this recipe??? (Operation cannot be undone)");
            if (confirmation) {
                Restangular.one('recipes', $scope.recipeId).customDELETE().then(function () {
                        alert("Your recipe was successfully deleted!");
                        $location.path('/recipes');
                    },
                    function () {
                        alert("There was a problem deleting the recipe!")
                    });
            }


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
            if (index != -1){
                $scope.recipe.ingredients.splice(index, 1); //(index, 3) would remove 3 items starting @f index

            }

        };

        $scope.saveEditedRecipe = function () {
            $scope.recipe.photo = null; //To keep from sending wrong data to DB
            Restangular.one('recipes', $scope.recipeId).customPUT($scope.recipe).then(function () {
                alert("Your recipe was successfully updated!");
                $scope.editing = false;// Look in html for editing!

            }, function () {
                alert("Something went wrong while updating the recipe...");
            });
        };

    }]);