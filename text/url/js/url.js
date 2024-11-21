var app = angular.module('App', []);
app.controller('AppController', function($scope){
    $scope.URL = $('#URLForm').val();
    $scope.encodeURL = function() {
        return encodeURIComponent($scope.URL);
    };
    $scope.decodeURL = function() {
        return decodeURIComponent($scope.URL);
    };
});