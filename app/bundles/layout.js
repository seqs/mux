define(function (require) {
  var m = require('mithril')

  var Layout = {
    controller: function () {},
    styles: {
      nav: {
        color: 'red',
        WebkitUserSelect: 'none'
      }
    },
    view: function (ctrl, args, extras) {
      return m('div', [m('ul', {style: Layout.styles.nav}, [
        m('li', m('a[href="#/"]', 'Home')),
        m('li', m('a[href="#/example"]', 'Example')),
      ]),
        m('div', extras)
      ])
    }
  }

  return Layout
})
