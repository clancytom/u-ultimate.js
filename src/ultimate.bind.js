if (window.angular.bootstrap) {
  // UultimateJS is already loaded, so we can return here...
  if (window.console) {
    console.log('WARNING: Tried to load UultimateJS more than once.');
  }
  return;
}

// try to bind to jquery now so that one can write jqLite(fn)
// but we will rebind on bootstrap again.
bindJQuery();
