import React from 'react';
import { StyledIcon } from '../StyledIcon';

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
export var Blank = function Blank(props) {
  return React.createElement(StyledIcon, {viewBox: "0 0 24 24",
    "aria-hidden": true, ...props});
};