_ = require('lodash')

moment = require('moment')

faker = require('faker')

React = require('react')

Component = React.Component

const { mount: Mount, withOptions } = require('react-mounter')

mount = withOptions({
  rootId: 'app'
}, Mount)

compose = require('react-komposer').compose

tracker = function getTrackerLoader(reactiveMapper) {
  return (props, onData, env) => {
    let trackerCleanup = null
    const handler = Tracker.nonreactive(() => {
      return Tracker.autorun(() => {
        trackerCleanup = reactiveMapper(props, onData, env)
      })
    })

    return () => {
      if(typeof trackerCleanup === 'function') trackerCleanup()
      return handler.stop()
    }
  }
}
