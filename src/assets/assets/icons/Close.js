

exports.__esModule = true;
exports.Close = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Close = function Close(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 16 16",
    a11yTitle: "Close", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-687.000000, -478.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("path", {
    d: "M701.722309,479.945167 C702.167293,479.500183 702.167294,478.778722 701.72231,478.333738 C701.277327,477.888754 700.555866,477.888754 700.110883,478.333737 L694.528024,483.916596 L688.945168,478.333739 C688.500184,477.888755 687.778722,477.888754 687.333738,478.333737 C686.888755,478.778722 686.888755,479.500182 687.333739,479.945167 L692.916596,485.528023 L687.333737,491.110884 C686.888753,491.555867 686.888755,492.277327 687.333739,492.72231 C687.778722,493.167294 688.500183,493.167294 688.945167,492.72231 L694.528024,487.139453 L700.110882,492.722309 C700.555865,493.167293 701.277327,493.167294 701.72231,492.72231 C702.167294,492.277327 702.167294,491.555866 701.72231,491.110883 L696.139453,485.528023 L701.722309,479.945167 Z"
  }))));
};

exports.Close = Close;