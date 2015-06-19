angular.module('ng-visible-invisible', [])
.directive('ngVisible', [ '$animate', function($animate) {
    return {
        restrict: 'A',
        multiElement: true,
        link: function(scope, element, attr) {
            scope.$watch(attr.ngVisible, function ngVisibleWatchAction(value) {
                // we're adding a temporary, animation-specific class for ng-invisible since this way
                // we can control when the element is actually displayed on screen without having
                // to have a global/greedy CSS selector that breaks when other animations are run.
                $animate[value ? 'removeClass' : 'addClass'](element, 'ng-invisible', {
                    tempClasses: 'ng-invisible-animate'
                });
            });
        }
    }
}])
.directive('ngInvisible', [ '$animate', function($animate) {
    return {
        restrict: 'A',
        multiElement: true,
        link: function(scope, element, attr) {
           scope.$watch(attr.ngInvisible, function ngInvisibleWatchAction(value) {
                // The comment inside of the ngVisibleDirective explains why we add and
                // remove a temporary class for the visible/invisible animation
                $animate[value ? 'addClass' : 'removeClass'](element,'ng-invisible', {
                  tempClasses: 'ng-invisible-animate'
                });
              });
        }
    }
}]);