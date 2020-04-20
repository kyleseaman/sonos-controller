

exports.__esModule = true;
exports.More = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const More = function More(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 18 3",
    a11yTitle: "More", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-481.000000, -228.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("g", {
    transform: "translate(481.000000, 228.000000)"
  }, _react.default.createElement("path", {
    d: "M3,1.5 C3,0.67125 2.32875,0 1.5,0 C0.67125,0 0,0.67125 0,1.5 C0,2.32875 0.67125,3 1.5,3 C2.32875,3 3,2.32875 3,1.5 Z"
  }), _react.default.createElement("path", {
    d: "M9,0 C8.171249,0 7.5,0.67125 7.5,1.5 C7.5,2.32875 8.171249,3 9,3 C9.82875,3 10.5,2.32875 10.5,1.5 C10.5,0.67125 9.82875,0 9,0 Z"
  }), _react.default.createElement("path", {
    d: "M15,1.5 C15,0.67125 15.671249,0 16.5,0 C17.328751,0 18,0.67125 18,1.5 C18,2.32875 17.328751,3 16.5,3 C15.671249,3 15,2.32875 15,1.5 Z"
  })))));
};

exports.More = More;