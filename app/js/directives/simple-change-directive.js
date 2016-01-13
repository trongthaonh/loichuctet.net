'use strict';

function SimpleChangeDirective() {

  return {
    restrict: 'A',
    link: function(scope, el, attrs) {

      if (!attrs.simpleChange) {
        return;
      }

      el.on('change', function(e) {
        scope.$apply(function() {
          scope.$eval(attrs.simpleChange, {
            $event: e
          });
        });
      });
    }
  };
}

export default {
  name: 'simpleChange',
  fn: SimpleChangeDirective
};
