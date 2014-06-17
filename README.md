# gigaquery

because less is more

## What is it

It's a tiny little napkinfull of code that lets you omit jQuery without going insane. It's literally just [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/document.querySelector) /  [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document.querySelectorAll) but it returns an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) instead of a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) and has some optional extra arguments.

## Why

* Becuase `document.querySelectorAll` is too long to type; I'd rather just type `$`
* Because `NodeList` doesn't have [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* Because I have become accustomed to terse code

## How big is it?

0.541 kb unminified

## Installation

Using [Bower](http://bower.io/):

    bower install gigaquery
    
Supports both [AMD](http://requirejs.org/docs/whyamd.html) and browser globals using [UMD](https://github.com/umdjs/umd/blob/master/amdWeb.js). If using AMD you can `require` it the usual way. Otherwise the `$` variable is placed in your global scope.

Also you can grab the code right from the `src` directory in this repo.

## API

    $(selector, single, context);

* `selector` is a [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)
* `single` is a boolean (default false) that determines if you want a single DOM element or an Array of DOM elements. This lets you choose between `querySelector` and `querySelectorAll`.
* `context` is a DOM element (default `document`). Only children of `context` are queried. It's as if you had called `querySelector` or `querySelectorAll` on that DOM element rather than on the `document` object.

## Examples

    var divs = $('div');
    console.log(divs.length);

    $('div').forEach(function(div) {
      console.log(div.innerText);
    });

    var oneThing = $('#special', true);
    
    var parent = $('#foo', true);
    var children = $('.bar', false, parent);
