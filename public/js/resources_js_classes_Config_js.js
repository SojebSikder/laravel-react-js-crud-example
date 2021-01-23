(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_classes_Config_js"],{

/***/ "./resources/js/classes/Config.js":
/*!****************************************!*\
  !*** ./resources/js/classes/Config.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Basic Configuration
 */
var Config = /*#__PURE__*/function () {
  function Config() {
    _classCallCheck(this, Config);
  }

  _createClass(Config, null, [{
    key: "getUrl",

    /**
     * Get Server address
     */
    value: function getUrl() {
      return 'http://127.0.0.1:8000';
    }
  }]);

  return Config;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Config);

/***/ })

}]);