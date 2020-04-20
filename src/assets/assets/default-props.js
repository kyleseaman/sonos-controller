

exports.__esModule = true;
exports.extendDefaultTheme = exports.defaultProps = void 0;

const _utils = require("./utils");

const _themes = require("./themes");

const defaultProps = {
  theme: _themes.base
};
exports.defaultProps = defaultProps;

const extendDefaultTheme = function extendDefaultTheme(theme) {
  defaultProps.theme = (0, _utils.deepMerge)(_themes.base, theme);
};

exports.extendDefaultTheme = extendDefaultTheme;