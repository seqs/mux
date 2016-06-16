define(function (require) {
  var m = require('mithril')
  var Button = require('app/components/button')

  var Content = {
    controller: function () {},
    view: function (ctrl) {
      return m('div', [
        m('div', 'example from #/example route'),
        m('div', m.component(Button, {}, 'Primary'))
      ])
    }
  }

  return Content
})
