var app = angular.module('mainApp')

app.directive('customHeader', function () {
    return {
        restrict: "E",
        templateUrl: "./lib/header/header.html",
        link: function ($scope) {
            $scope.headerText = "alberty.dev";
        } 
    }
});