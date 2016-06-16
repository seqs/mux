define(function (require) {
  function hexToRgb (hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    var shortHex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b
    })

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(shortHex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }

  function rgba (hex, alpha) {
    var rgb = hexToRgb(hex)
    if (alpha > 0) {
      return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + alpha + ')'
    } else {
      return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')'
    }
  }

  function LightenDarkenColor (col, amt) {
    var usePound = false

    if (col[0] == '#') {
      col = col.slice(1)
      usePound = true
    }

    var num = parseInt(col, 16)

    var r = (num >> 16) + amt

    if (r > 255) r = 255
    else if (r < 0) r = 0

    var b = ((num >> 8) & 0x00FF) + amt

    if (b > 255) b = 255
    else if (b < 0) b = 0

    var g = (num & 0x0000FF) + amt

    if (g > 255) g = 255
    else if (g < 0) g = 0

    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
  }

  var colors = {
    greyDarker: '#222324',
    greyDark: '#69707a',
    grey: '#aeb1b5',
    greyLight: '#d3d6db',
    greyLighter: '#f5f7fa',

    blue: '#42afe3',
    green: '#97cd76',
    orange: '#f68b39',
    purple: '#847bb9',
    red: '#ed6c63',
    turquoise: '#1fc8db',
    yellow: '#fce473',
    white: '#fff',
  }

  colors.primary = colors.turquoise
  colors.warning = colors.yellow
  colors.success = colors.green
  colors.info = colors.blue
  colors.danger = colors.red

  colors.rgba = function (name, alpha) {
    return rgba(colors[name], alpha)
  }

  colors.darken = function (col, amt) {
    return LightenDarkenColor(col, amt)
  }

  colors.lighten = function (col, amt) {
    return LightenDarkenColor(col, -amt)
  }

  return colors
})
