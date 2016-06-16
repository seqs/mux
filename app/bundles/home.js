define(function (require) {
  var m = require('mithril')
  var Layout = require('app/bundles/layout')

  var Home = {
    controller: function () {
      return {id: m.route.param('id') || 1}
    },
    view: function (ctrl) {
      return m.component(Layout, {}, m('div', ctrl.id))
    }
  }

  return Home
})
