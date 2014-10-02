angular.module('controllers').controller('RootCtrl', function($scope,$localStorage) {
    $localStorage.$default({
        theme: 'monokai',
        fontSize: 14
    });
    var EDITOR_TYPES = ['html','scss','javascript'];
    $scope.value = 'NowLoading...';
    $scope.theme = $localStorage.theme;
    $scope.fontSize = $localStorage.fontSize;
    $scope.view = {
        html: true,
        scss: true,
        javascript: true
    };
    $scope.column = 3;

    var loadedEditor = [];
    var editors = {};
    $scope.onLoadEditor = function(editor) {
        var id = editor.container.getAttribute('data-mode');
        if (loadedEditor.indexOf(id) !== -1) return;
        loadedEditor.push(id);
        editors[id] = editor;
        var session = editor.getSession();
        session.setMode('ace/mode/' + id);
        editor.setOptions({
            showPrintMargin: false,
            enableSnippets: true,
            enableBasicAutocompletion: true
        });
        if (loadedEditor.length === 3) {
            loadedComplete();
        }
    };
    function loadedComplete() {
        $scope.changeTheme();
        $scope.changeFontSize();
    }

    $scope.$watch('view', function() {
        var count = 0;
        for (var key in $scope.view) {
            if ($scope.view[key] == true) {
                ++count;
            }
        }
        $scope.column = 12 / count;
    },true);
    $scope.changeFontSize = function() {
        for (var key in editors) {
            editors[key].setFontSize(parseInt($scope.fontSize));
        }
        $localStorage.fontSize = parseInt($scope.fontSize);
    };
    $scope.changeTheme = function() {
        for (var key in editors) {
            editors[key].setTheme('ace/theme/' + $scope.theme);
        }
        $localStorage.theme = $scope.theme;
    };
});
