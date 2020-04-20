

exports.__esModule = true;
exports.Menu = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Menu = function Menu(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 18 12",
    a11yTitle: "Menu", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-575.000000, -258.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("g", {
    transform: "translate(575.000000, 258.000000)"
  }, _react.default.createElement("polygon", {
    points: "0 2 0 0 18 0 18 2"
  }), _react.default.createElement("polygon", {
    points: "0 7 18 7 18 5 0 5"
  }), _react.default.createElement("polygon", {
    points: "0 12 18 12 18 10 0 10"
  })))));
};

exports.Menu = Menu;