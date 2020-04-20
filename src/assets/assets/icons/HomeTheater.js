

exports.__esModule = true;
exports.HomeTheater = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const HomeTheater = function HomeTheater(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 22 16",
    a11yTitle: "HomeTheater", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-404.000000, -548.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("g", {
    transform: "translate(404.000000, 548.000000)"
  }, _react.default.createElement("path", {
    d: "M6.502,14 L15.497,14 C15.629608,14 15.756785,14.052678 15.850554,14.146446 C15.944322,14.240214 15.997,14.367392 15.997,14.5 L15.997,15.5 C15.997,15.632608 15.944322,15.759786 15.850554,15.853554 C15.756785,15.947322 15.629608,16 15.497,16 L6.502,16 C6.369391,16 6.242215,15.947322 6.148447,15.853554 C6.054678,15.759786 6.002,15.632608 6.002,15.5 L6.002,14.5 C6.002,14.367392 6.054678,14.240214 6.148447,14.146446 C6.242215,14.052678 6.369391,14 6.502,14 Z"
  }), _react.default.createElement("path", {
    d: "M0.146447,0.146446 C0.240215,0.052678 0.367392,0 0.5,0 L21.5,0 C21.632608,0 21.759785,0.052678 21.853554,0.146446 C21.947323,0.240215 22,0.367392 22,0.5 L22,12.5 C22,12.632608 21.947323,12.759786 21.853554,12.853554 C21.759785,12.947322 21.632608,13 21.5,13 L0.5,13 C0.367392,13 0.240215,12.947322 0.146447,12.853554 C0.052678,12.759786 0,12.632608 0,12.5 L0,0.5 C0,0.367392 0.052678,0.240215 0.146447,0.146446 Z M2,2 L2,11 L19.991001,11 L19.991001,2 L2,2 Z"
  })))));
};

exports.HomeTheater = HomeTheater;