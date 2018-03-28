
angular.module("heroApp").component('dsButton', {
    bindings: {
        initialValue: '@?',
        className: '<?',
        isDisabled: '<?',
        onClick: '&?',
        onBlur: '&?',
        onFocus: '&?',
        onKeydown: '&?',
        onKeyup: '&?',
    },
    transclude: true,
    templateUrl: 'dsButton.html',
    controller: function ($scope, $element, $attrs) {
        var ctrl = this;
        ctrl.errorMessages = [];

        $scope.click = function ($event) {
            if (typeof (ctrl.onClick) === 'function') {
                ctrl.onClick({
                    event: $event
                });
            }
        }

        ctrl.blur = function ($event) {
            if (typeof (ctrl.onBlur) === 'function') {
                ctrl.onBlur({
                    event: $event
                });
            }
        }

        ctrl.focus = function ($event) {
            if (typeof (ctrl.onFocus) === 'function') {
                ctrl.onFocus({
                    event: $event
                });
            }
        }

        ctrl.keydown = function ($event) {
            if (typeof (ctrl.onKeydown) === 'function') {
                ctrl.onKeydown({
                    event: $event
                });
            }

        }

        ctrl.keyup = function ($event) {
            if (typeof (ctrl.onKeyup) === 'function') {
                ctrl.onKeyup({
                    event: $event
                });
            }
        }


    }
});


// angular.module('heroApp').component('dsInput', {
//     templateUrl: 'dsInput.html',
//     bindings: {
//         model: '=',
//         change: '&'
//     },
//     controller: HeroListController

// });


// angular.module('heroApp').directive("customInput", function ($timeout) {
//     return {
//         restrict: "E",
//         scope: {
//             onClickNotify: "&onClick",
//             onChangeNotify: '&onChange'
//         },
//         template: "<input type='text' ng-click='onClick()' ng-change='onChange()' ng-model='res'/>",
//         replace: true,
//         transclude: false,          
//         link: function (scope, element, attrs, controller) {
//             scope.onClick = function () {
//                 if (typeof (scope.onClickNotify) == 'function') {
//                     scope.onClickNotify({ctrlDown: window.event.ctrlKey});
//                 }
//             }

//             scope.onChange = function() {
//                 if (typeof (scope.onChangeNotify) == 'function') {
//                     scope.onChangeNotify({ctrlDown: window.event});
//                 }
//             }
//         }
//     }
// });