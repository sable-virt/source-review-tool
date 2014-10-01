webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("/**\n * app.js\n */\n\n(function(angular) {\n    var MODULES = [\n        'ngRoute',\n        'ngStorage',\n        'ui.ace'\n    ];\n    var MODULE_GROUP = [\n        'controllers',\n        'filters',\n        'services',\n        'directives'\n    ];\n    for (var i = 0, len = MODULE_GROUP.length; i < len; i++) {\n        angular.module(MODULE_GROUP[i],[]);\n    }\n    angular.module('app',MODULES.concat(MODULE_GROUP)).config(function ($routeProvider,$locationProvider,$httpProvider) {\n        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHTTPRequest';\n        // ルーティング設定\n//        $routeProvider\n//            .when('/', {\n//                templateUrl: '/views/top',\n//                controller: 'IndexCtrl'\n//            })\n//            .when('/room/:id',{\n//                templateUrl: '/views/room',\n//                controller: 'RoomCtrl'\n//            })\n//            .otherwise({\n//                redirectTo: '/'\n//            });\n    });\n})(angular);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/source/js/app.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/source/js/app.js?");

/***/ }
]);