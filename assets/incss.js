function loadStyle(href, callback) {
  // avoid duplicates
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].href == href) {
      return;
    }
  }
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = href;
  if (callback) {
    link.onload = function () {
      callback();
    };
  }
  head.insertAdjacentElement('afterBegin', link);
}

function loadStyleTheme() {
  window.onload = function () {};
  var theme = getParameterByName('theme', window.location.search);
  loadStyle('./theme-' + theme + '.css', function () {
    console.log('loaded css');
  });
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

loadStyleTheme();
