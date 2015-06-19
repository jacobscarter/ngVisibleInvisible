# ngVisibleInvisible

Angular Directives ngVisible and ngInvisible

The `ngVisible` directive shows or hides the given HTML element based on the expression provided to the `ngVisible` attribute. The element is shown or hidden by removing or adding the `.ng-invisible` CSS class onto the element. The `.ng-invisible` CSS class is defined in the included CSS file and sets the visiblity style to hidden (using an !important flag).  The visibility property hides an element while leaving the space where it would have been.

The `ngInvisible` directive shows or hides the given HTML element based on the expression provided to the `ngInvisible` attribute. The element is shown or hidden by removing or adding the `.ng-invisible` CSS class onto the element. The `.ng-invisible` CSS class is predefined in AngularJS and sets the visiblity to hidden (using an !important flag).  The visibility property hides an element while leaving the space where it would have been.

## Installation

```
bower install ngVisibleInvisible
```

Include in your main app file

```
angular.module('myApp', ['ng-visible-invisible']);
```

In your index.html file include js and css

```
  <link href="bower_components/ngVisibleInvisible/dist/ng-visible-invisible.min.css" rel="stylesheet">
  <script src="bower_components/ngVisibleInvisible/dist/ng-visible-invisible.min.js"></script>
```

##Use

```
<div ng-visible="checked"></div>
or
<div ng-invisible="checked"></div>
```
