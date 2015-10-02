var flickit = angular.module('flickit',['ui.router']);

flickit.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('welcome', {
        url: "",
        views: {
            'welcome': {
                templateUrl: "partials/welcome.html",
                controller: "ViewsCtrl"

            } 
        }
    });

    $stateProvider.state('flickit', {
        url: "/flickit",
        views: {
            'header': {
                templateUrl: "partials/header.html"
            },
            'leftbar': {
                templateUrl: "partials/leftbar.html",
            },         
            'mainpage': {
                templateUrl: "partials/mainpage.html"
            }   
        }
    });


});
