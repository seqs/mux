define(function (require) {
  var m = require('mithril')
  var jss = require('jss')
  var jssCamelCase = require('jss-camel-case')
  var jssNested = require('jss-nested')

  // JSS Setup
  jss.default.use(jssCamelCase.default())
  jss.default.use(jssNested.default())

  function mjss (styles, context) {
    var context = context || this
    context._style || (
    context._style = jss.createStyleSheet(styles).attach().classes
    )
    return context._style
  }

  return mjss
})
