webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/source/js/main.js\n ** module id = 0\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./app/source/js/main.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("angular.module('controllers').controller('RootCtrl', function($scope,$localStorage) {\n    $localStorage.$default({\n        theme: 'monokai',\n        fontSize: '14px'\n    });\n    var EDITOR_TYPES = ['html','scss','javascript'];\n    $scope.value = 'NowLoading...';\n    $scope.theme = $localStorage.theme;\n    $scope.fontSize = $localStorage.fontSize;\n    $scope.view = {\n        html: true,\n        scss: true,\n        javascript: true\n    };\n    $scope.column = 3;\n\n    var loadedEditor = [];\n    var editors = {};\n    $scope.onLoadEditor = function(editor) {\n        var id = editor.container.id;\n        if (loadedEditor.indexOf(id) !== -1) return;\n        loadedEditor.push(id);\n        editors[id] = editor;\n        var session = editor.getSession();\n        session.setMode('ace/mode/' + id);\n        editor.setOptions({\n            showPrintMargin: false,\n            enableSnippets: true,\n            enableBasicAutocompletion: true\n        });\n        if (loadedEditor.length === 3) {\n            loadedComplete();\n        }\n    };\n    function loadedComplete() {\n        $scope.changeTheme();\n        $scope.changeFontSize();\n    }\n\n    $scope.$watch('view', function() {\n        var count = 0;\n        for (var key in $scope.view) {\n            if ($scope.view[key] == true) {\n                ++count;\n            }\n        }\n        $scope.column = 12 / count;\n    },true);\n    $scope.changeFontSize = function() {\n        for (var key in editors) {\n            editors[key].setFontSize(parseInt($scope.fontSize));\n        }\n        $localStorage.fontSize = $scope.fontSize;\n    };\n    $scope.changeTheme = function() {\n        for (var key in editors) {\n            editors[key].setTheme('ace/theme/' + $scope.theme);\n        }\n        $localStorage.theme = $scope.theme;\n    };\n});\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/source/js/controllers/_RootCtrl.js\n ** module id = 1\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./app/source/js/controllers/_RootCtrl.js?");

/***/ }
]);