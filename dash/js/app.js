var app = angular.module("libraApp", ["ngRoute", "amChartsDirective"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/inicio.html"
    })
    .when("/panel", {
        templateUrl : "views/panel.html"
    })
    .when("/analitycs", {
        templateUrl : "views/analytics.html",
        controller: widgetsController,
        activetab: 'analitycs'
    })
    .when("/pretrade", {
        templateUrl : "views/pretrade.html",
        activetab: 'pretrade'
    });
});

function widgetsController($scope, $route) {
    $scope.$route = $route;
};
