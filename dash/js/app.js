var app = angular.module("libraApp", ["ngRoute", "amChartsDirective"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/inicio.html"
    })
    .when("/analitycs", {
        templateUrl : "views/analytics.html",
        controller: widgetsController,
        activetab: 'analitycs'
    })
    .when("/eupm", {
        templateUrl : "views/eupm.html",
        controller: widgetsController,
        activetab: 'eupm'
    })
    .when("/cierre", {
        templateUrl : "views/cierre.html",
        controller: widgetsController,
        activetab: 'cierre'
    })
    .when("/apin", {
        templateUrl : "views/apin.html",
        controller: widgetsController,
        activetab: 'apin'
    });
});

function widgetsController($scope, $route) {
    $scope.$route = $route;
};
