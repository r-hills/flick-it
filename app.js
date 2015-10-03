var flickit = angular.module('flickit',['ui.router']);

flickit.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('welcome', {
        url: "",
        templateUrl: "partials/welcome.html"
    });

    $stateProvider.state('flickit', {
        url: "/flickit",
        templateUrl: "partials/flickit.html",
        controller: "ReviewsCtrl"
    });

    $stateProvider.state('flickit.main', {
        url: "/:reviewId",
        templateUrl: "partials/flickit.main.html",
        controller: 'ReviewsCtrl'
    });


});
