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
    return (context || document).querySelector(selector);
  };

  var $$ = function(selector, context) {
    var nl = (context || document).querySelectorAll(selector);
    return Array.prototype.slice.call(nl);
  };

  $.$ = $;
  $.$$ = $$;

  return $;

}));
