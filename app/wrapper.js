define(function (require) {
  var m = require('mithril')

  var Wrapper = function (name) {
    return {
      controller: function () {
        return new Wrapper.controller(name)
      },
      view: Wrapper.view
    }
  }

  Wrapper.controller = function (name) {
    var self = this
    self.content = m.prop('Loading...')

    m.startComputation()
    require([name], function (Component) {
      var view = Component.view.bind(self, new Component.controller)
      self.content(view())
      m.endComputation()
    })
  }

  Wrapper.view = function (ctrl) {
    return m('.container-wrapper', ctrl.content())
  }

  return Wrapper
})
