import Layout from '../layout'

import Home from './index'

FlowRouter.route('/', {
  action() {
    mount(Layout, {
      template: () => <Home />
    })
  }
})
