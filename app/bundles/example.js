define(function (require) {
  var m = require('mithril')
  var Layout = require('app/bundles/layout')
  var Content = require('app/bundles/example/content')

  var Example = {
    controller: function () {},
    view: function (ctrl) {
      return m.component(Layout, {}, m.component(Content))
    }
  }

  return Example
})
