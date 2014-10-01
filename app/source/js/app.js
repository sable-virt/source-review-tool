/**
 * app.js
 */

(function(angular) {
    var MODULES = [
        'ngRoute',
        'ngStorage',
        'ui.ace'
    ];
    var MODULE_GROUP = [
        'controllers',
        'filters',
        'services',
        'directives'
    ];
    for (var i = 0, len = MODULE_GROUP.length; i < len; i++) {
        angular.module(MODULE_GROUP[i],[]);
    }
    angular.module('app',MODULES.concat(MODULE_GROUP)).config(function ($routeProvider,$locationProvider,$httpProvider) {
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHTTPRequest';
        // ルーティング設定
//        $routeProvider
//            .when('/', {
//                templateUrl: '/views/top',
//                controller: 'IndexCtrl'
//            })
//            .when('/room/:id',{
//                templateUrl: '/views/room',
//                controller: 'RoomCtrl'
//            })
//            .otherwise({
//                redirectTo: '/'
//            });
    });
})(angular);