export default {
  themeConfig: {
    mode: 'light',
    colors: {
      text: '#333840', //	body color
      background: '#fff', //	body background color
      primary: '#66C', //	primary button and link color
      secondary: '#759ccc', //	secondary color - can be used for hover states
      accent: '#adcc74', //	a contrast color for emphasizing UI
      muted: '#6e6d6a', //	a gray or subdued color for decorative purposes
    },
    fonts: {
      body: 'system-ui, sans-serif',
      heading: 'Georgia, serif',
      monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    letterSpacings: {
      body: 'normal',
      caps: '0.2em',
    },
  },
}
