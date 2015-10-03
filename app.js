var flickit = angular.module('flickit',['ui.router']);

flickit.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('welcome', {
        url: "",
        views: {
            'welcome': {
                templateUrl: "partials/welcome.html"
            }
        }
    });

    $stateProvider.state('flickit', {
        url: "/flickit",
        views: {
            'header': {
                templateUrl: "partials/header.html"
            },
            'flickit': {
                templateUrl: "partials/flickit.html",
                controller: "ReviewsCtrl"            }
        }
    });

    $stateProvider.state('flickit.main', {
        url: "/:reviewId",
        views: {
            'flickit': {
                templateUrl: "partials/flickit.main.html",
                controller: 'ReviewsCtrl'
            }
        }
    });


});
