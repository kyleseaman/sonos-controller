

exports.__esModule = true;
exports.StyledIcon = void 0;

const _react = _interopRequireDefault(require("react"));

const _styledComponents = _interopRequireWildcard(require("styled-components"));

const _grommetStyles = require("grommet-styles");

const _defaultProps = require("./default-props");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; const cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } const cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; const target = {}; const sourceKeys = Object.keys(source); let key; let i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const colorCss = (0, _styledComponents.css)(["", " ", " g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill=\"none\"]{stroke-width:0;}}*[stroke*=\"#\"],*[STROKE*=\"#\"]{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*=\"#\"],*[FILL*=\"#\"]{fill:inherit;stroke:none;}"], function (props) {
  return (0, _grommetStyles.colorStyle)('fill', props.color || props.theme.global.colors.icon, props.theme);
}, function (props) {
  return (0, _grommetStyles.colorStyle)('stroke', props.color || props.theme.global.colors.icon, props.theme);
});

const IconInner = function IconInner(_ref) {
  const {a11yTitle} = _ref;
      const {color} = _ref;
      const {size} = _ref;
      const {theme} = _ref;
      const rest = _objectWithoutPropertiesLoose(_ref, ["a11yTitle", "color", "size", "theme"]);

  return _react.default.createElement("svg", {"aria-label": a11yTitle, ...rest});
};

IconInner.displayName = 'Icon';

const parseMetricToNum = function parseMetricToNum(string) {
  return parseFloat(string.match(/\d+(\.\d+)?/), 10);
};

const StyledIcon = (0, _styledComponents.default)(IconInner).withConfig({
  displayName: "StyledIcon",
  componentId: "ofa7kd-0"
})(["display:inline-block;flex:0 0 auto;", " ", " ", ""], function (_ref2) {
  const _ref2$size = _ref2.size;
      const size = _ref2$size === void 0 ? 'medium' : _ref2$size;
      const {theme} = _ref2;
      const {viewBox} = _ref2;

  const _split = (viewBox || '0 0 24 24').split(' ');
      const w = _split[2];
      const h = _split[3];

  const scale = w / h;
  const dimension = parseMetricToNum(theme.icon.size[size] || size);

  if (w < h) {
    return `\n      width: ${  dimension  }px;\n      height: ${  dimension / scale  }px;\n    `;
  }

  if (h < w) {
    return `\n      width: ${  dimension * scale  }px;\n      height: ${  dimension  }px;\n    `;
  }

  return `\n      width: ${  dimension  }px;\n      height: ${  dimension  }px;\n    `;
}, function (_ref3) {
  const {color} = _ref3;
  return color !== 'plain' && colorCss;
}, function (_ref4) {
  const {theme} = _ref4;
  return theme && theme.icon.extend;
});
exports.StyledIcon = StyledIcon;
StyledIcon.defaultProps = {};
Object.setPrototypeOf(StyledIcon.defaultProps, _defaultProps.defaultProps);