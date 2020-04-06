import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const AppTheme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#228BE6',
      disabled: {
        light: 'light5',
        dark: 'dark-5',
      },
      'background-back': {
        dark: '#262626',
        light: '#D8D8D8',
      },
      'background-front': {
        light: 'light-2',
        dark: 'dark-1',
      },
      'background-front-selected': {
        light: 'dark-1',
        dark: 'dark-2',
      },
      'playback-bar': {
        light: 'dark-1',
        dark: '#000000',
      },
    },
    elevation: {
      light: { small: '0px 2px 4px rgba(0, 0, 0, 0.20)' },
      dark: { small: '0px 4px 4px rgba(0, 0, 0, 0.40)' },
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    focus: {
      border: {
        color: 'rgba(0,0,0,0.0)',
      },
    },
  },
  button: {
    extend: () => 'outline: none',
  },
  layer: {
    background: {
      light: 'rgba(0, 0, 0, 0.0)', // '#D8D8D8',
      dark: 'rgba(0, 0, 0, 0.0)',
    },
  },
  rangeInput: {
    track: {
      extend: () => 'border-radius: 10px',
    },
    thumb: {
      color: 'dark-6',
    },
  },
  list: {
    item: {
      pad: { horizontal: 'xxsmall', vertical: 'small' },
      border: false,
    },
  },
  icon: {
    size: {
      small: '16px',
      medium: '30px',
      large: '48px',
      xlarge: '96px',
    },
    extend: undefined,
  },
  radioButton: {
    size: '30px',
    icon: {
      size: '16px',
    },
    extend: () => `
      font-size: 16px;
      color: #000000;
    `,
  },
  tab: {
    border: undefined,
  },
});

export default AppTheme;
