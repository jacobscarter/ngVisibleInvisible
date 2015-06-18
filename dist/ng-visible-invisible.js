/**
 * Directive for adding and removing DOM node visiblity
 * @version v0.1.0 - 2015-06-18 * @link https://github.com/jacobscarter/ngVisibleInvisible
 * @author Jacob Carter <jacob@ieksolutions.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

angular.module('ng-visible-inviible', ['templates-angularcronjobs'])

.directive('ngVisible', [ function() {

    var NG_INVISIBLE_CLASS = 'ng-hide';
    var NG_INVISIBLE_IN_PROGRESS_CLASS = 'ng-hide-animate';

    return {
        restrict: 'A',
        multiElement: true,
        link: function($scope, element, attr) {
           scope.$watch(attr.ngVisible, function ngVisibleWatchAction(value) {
                // we're adding a temporary, animation-specific class for ng-invisible since this way
                // we can control when the element is actually displayed on screen without having
                // to have a global/greedy CSS selector that breaks when other animations are run.
                $animate[value ? 'removeClass' : 'addClass'](element, NG_INVISIBLE_CLASS, {
                    tempClasses: NG_INVISIBLE_IN_PROGRESS_CLASS
                });
            });
        }
    }
}]).directive('ngInvisible', [ function() {

    var NG_INVISIBLE_CLASS = 'ng-hide';
    var NG_INVISIBLE_IN_PROGRESS_CLASS = 'ng-hide-animate';

    return {
        restrict: 'A',
        multiElement: true,
        link: function($scope, element, attr) {
           scope.$watch(attr.ngInvisible, function ngInvisibleWatchAction(value) {
                // The comment inside of the ngVisibleDirective explains why we add and
                // remove a temporary class for the visible/invisible animation
                $animate[value ? 'addClass' : 'removeClass'](element,NG_INVISIBLE_CLASS, {
                  tempClasses: NG_INVISIBLE_IN_PROGRESS_CLASS
                });
              });

        }
    }
}])