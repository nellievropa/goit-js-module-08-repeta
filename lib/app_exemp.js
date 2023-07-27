"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var sum = function sum(a, b) {
  return a + b;
};
sum(2, 3);
var Hero = /*#__PURE__*/function () {
  function Hero(name) {
    _classCallCheck(this, Hero);
    this._name = name;
  }
  _createClass(Hero, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(newName) {
      this._name = newName;
    }
  }]);
  return Hero;
}();
var h = new Hero('mango');

//  встановлюємо з babeljs.io з розділлу settings і із інструментів вибираємо CLI, клікаємо
// беремо звідти посилання на налаштування npm install --save-dev @babel/core @babel/cli

//   після встановлення додаєм скрипт, що рекомендується на сайті
//   "build": "babel src -d lib"

// потім запускаємо його в роботу npm run build
// він спрацював, але нічого не змінив, правда створив папку lib з таким самим файлом, 
// бо йому треба сказати до якої старої версії треба змінювати наш новий код
// тому ми встановлюємо ще один файл npm install @babel/preset-env --save-dev 
// створюємо папку, яку він рекомендує babel.config.json і туди додаемо те, що рекомендується {
//   "presets": ["@babel/preset-env"]
// }
// знову запускаємо npm run build
// тепер наша стрілочна функція виглядає як звичайна
