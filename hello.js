// require("google-closure-library");

// goog.require("goog.dom");
// goog.require("goog.dom.TagName");

function sayHi() {
  var newHeader = goog.dom.createDom(
    goog.dom.TagName.H1,
    { style: "background-color:#EEE" },
    "Hello world!"
  );
  goog.dom.appendChild(document.body, newHeader);
}
