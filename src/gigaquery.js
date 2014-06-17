/* global define,document */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  }
  else {
    // Browser globals
    root.$ = factory();
    root.$$ = root.$.$$;
  }
}(this, function () {

  var $ = function(selector, context) {
    context = context || document;
    return context.querySelector(selector);
  };

  var $$ = function(selector, context) {
    context = context || document;
    var nl = context.querySelectorAll(selector);
    return Array.prototype.slice.call(nl);
  };

  $.$ = $;
  $.$$ = $$;

  return $;

}));
