

exports.__esModule = true;
exports.Blank = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Blank = function Blank(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 24 24",
    "aria-hidden": true, ...props});
};

exports.Blank = Blank;