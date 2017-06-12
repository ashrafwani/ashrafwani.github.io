'use strict';

/**
  * Create alias for requestAnimationFrame
*/
var RAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (cb) {
  setTimeout(cb, 1000 / 60);
};

/**
  * Initialize a canvas
*/
var BODY = document.body;
var HEIGHT = window.innerHeight / 1;
var WIDTH = window.innerWidth / 1;
var TOTAL = HEIGHT * WIDTH;

var CANVAS = document.createElement('canvas');
CANVAS.height = HEIGHT;
CANVAS.width = WIDTH;
var CONTEXT = CANVAS.getContext('2d');

/**
  * Start rendering some stuff.
*/
for (var pixel = 0; pixel < TOTAL; pixel++) {
  var X = pixel % WIDTH;
  var Y = Math.floor(pixel / WIDTH);
  var generateColor = function generateColor() {
    var base = Math.floor(Math.random() * 255).toString(16);
    return '#' + base + base + base;
  };
  var color = generateColor();
  // CONTEXT.fillStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  CONTEXT.fillStyle = color;
  CONTEXT.fillRect(X, Y, 1, 1);
}

BODY.style.background = 'url(' + CANVAS.toDataURL() + ')';

var update = function update() {
  var X = Math.floor(Math.random() * WIDTH);
  var Y = Math.floor(Math.random() * HEIGHT);
  BODY.style.backgroundPosition = X + 'px ' + Y + 'px';
  RAF(update);
};
RAF(update);

var root = document.documentElement;

var move = function move(e) {
  if (e.acceleration && e.acceleration.x !== null) {
    root.style.setProperty('--translateX', e.acceleration.x);
    root.style.setProperty('--translateY', e.acceleration.y);
  } else {
    root.style.setProperty('--translateX', e.pageX / innerWidth - 0.5);
    root.style.setProperty('--translateY', e.pageY / innerHeight - 0.5);
  }
};

BODY.addEventListener('mousemove', move);
window.ondevicemotion = move;