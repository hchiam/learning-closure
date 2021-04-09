# Learning [Closure](https://github.com/google/closure-library), Google's common JavaScript library

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Closure Library is a library that you call, not a framework (like React/Angular) that calls you. Library: more flexibility. Framework: less boilerplate.

Closure also comes with lower-level utilities for a variety of things like DOM manip, server comms, animation, data structures, testing, rich text editing, etc.:

<https://developers.google.com/closure/library>

Use it with the Closure Compiler: (JS -> better JS)

<https://developers.google.com/closure/compiler>

## Key conventions

### Namespace

```js
goog.math.clamp = function(...
```

### Dep management

```js
goog.provide("goog.math"); // namespace

goog.require("goog.math.Coordinate"); // import
```

### Inheritance

```js
goog.inherits(goog.ui.MenuButton, goog.ui.Button);
// makes MenuButton inherit stuff from Button

// so it can do getValue too now:
var btn = new goog.ui.MenuButton("hi");
var value = btn.getValue();
```

```js
// note: also MUST call() "super" constructor:
goog.ui.MenuButton = function(...
  goog.ui.Button.call(this, ...
```

### Events

```js
goog.events.listen(...
// and
this.dispatchEvent(...
```

Closure covers all browsers by defining its own event framework, and lets you define your own event types, and listen to Closure Library objects like you would for DOM elements.

```js
var eventType = goog.events.EventType.CLICK;
goog.events.listen(element, eventType, clickHandler, capturePhase, thisObject);

// and

this.dispatchEvent(
  new goog.ui.ZippyEvent(goog.ui.Zippy.Events.TOGGLE, this, this.expanded_)
);
```

## Trying it out

<https://developers.google.com/closure/library/docs/gettingstarted>

```bash
git clone https://github.com/google/closure-library
cd closure-library
yarn
cd ..
touch hello.js
touch hello.html
# fill in the two files
```

`npm init` and then use [parcel](https://github.com/hchiam/learning-parcel):

```bash
npm init
yarn global add parcel-bundler # or: npm install -g parcel-bundler
parcel hello.html
```
