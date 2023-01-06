let debugWindow;
window.viewDebug = function() {
  debugWindow = window.open('about:blank');
};
window.log = function(opts, ...args) {
  if (debugWindow && debugWindow.window) {
    const div = debugWindow.window.document.createElement('div');
    if (opts.color) {
      div.style.color = opts.color;
    }
    args.forEach((arg) => {
      div.innerText += arg.toString();
    });
    debugWindow.window.document.body.append(div);
  }
};
window.log.red = function(opts, ...args) {
  opts = opts || {};
  opts.color = '#FF0000';
  window.log(opts, ...args);
};
