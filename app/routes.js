define(function (require) {
  var m = require('mithril')
  var Wrapper = require('app/wrapper')

  // setup routes to start w/ the `#` symbol
  m.route.mode = 'hash'

  // define routes
  m.route(document.body, '/', {
    '/': Wrapper('app/bundles/home'),
    '/example': Wrapper('app/bundles/example'),
  })
})
