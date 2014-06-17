/* global define,document */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  }
  else {
    // Browser globals
    root.$ = factory();
  }
}(this, function () {

  return function(selector, single, context) {
    if (single === undefined) {
      single = true;
    }
    if (context === undefined) {
      context = document;
    }
    var nl = context.querySelectorAll(selector);
    return Array.prototype.slice.call(nl);
  };

}));
