module.exports = {
    plugins: {
      'postcss-px-to-viewport': {
        unitToConvert: 'px',
        viewportWidth: 1920, // Design width
        viewportHeight: 1080, // Design height
        unitPrecision: 5,
        viewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
      }
    }
  };