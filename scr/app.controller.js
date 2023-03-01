var app = angular.module('myApp', []);


app.directive('ckEditor', function () {
    return {
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            var ckeditor = CKEDITOR.replace(element[0]);

            ckeditor.on('pasteState', function () {
                scope.$apply(function () {
                    ngModel.$setViewValue(ckeditor.getData());
                });
            });

            ngModel.$render = function () {
                ckeditor.setData(ngModel.$modelValue);
            };
        }
    };
});

app.controller('demoCtrl', function ($scope) {

    $scope.editorContent = '';
    // $scope.editorData = '<h1>Initial editor nnnnnn</h1>'


    // $scope.editor = null;

    // ClassicEditor
    //     .create(document.querySelector('#editor'), {


    //     })
    //     .then(editor => {
    //         $scope.editor = editor;
    //         $scope.editor.setData($scope.editorData);
    //         $scope.editor.getData($scope.getDataddd);

    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });

    $scope.save = function () {

        console.log("ww", $scope.getDataddd)
    }
});