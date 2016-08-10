import 'webcomponents.js/webcomponents'

window.addEventListener('WebComponentsReady', function() {
  var CustomElement = Object.create(HTMLElement.prototype);

  CustomElement.attachedCallback = function() {
    // In firefox (using the webcomponent.js polyfill), 
    // adding and removing a second handler will also remove the initial handler if
    // the initial handler is an arrow function and useCapture: true

    // if you change this to either not be an arrow function OR set useCapture to false, the bug goes away.
    document.addEventListener('click', e => {
      alert('Clicked!');
    }, true);

    var handler = function() { };
    document.addEventListener('click', handler);
    document.removeEventListener('click', handler);
  };

  document.registerElement('custom-element', {prototype: CustomElement});

  var el = document.createElement('custom-element');

  document.body.appendChild(el);
})
