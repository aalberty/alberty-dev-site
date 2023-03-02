var app = angular.module('mainApp')

app.directive('customFooter', function () {
    return {
        restrict: "E",
        templateUrl: "./lib/footer/footer.html",
        link: function ($scope) {
            $scope.footerText = "this is my footer";
        } 
    }
});