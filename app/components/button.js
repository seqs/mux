define(function (require) {
  var m = require('mithril')
  var mjss = require('app/styles/mjss')
  var colors = require('app/styles/colors')

  var Button = {
    controller: function () {},
    styles: mjss({
      base: {
        textDecoration: 'none',
        border: '1px solid ' + colors.greyLight,
        borderRadius: '3px',
        padding: '8px 10px',
        background: colors.white,
        color: '#222324',
      },
      primary: {
        background: colors.primary,
        borderColor: 'transparent',
        color: colors.white,
        '&:hover': {
          background: colors.darken(colors.primary, 10),
          borderColor: 'transparent',
          color: colors.white,
        }
      }
    }, this),
    view: function (ctrl) {
      return m('a', {href: '#', class: [Button.styles.base, Button.styles.primary].join(' ')}, 'Primary')
    }
  }

  return Button
})
