import Layout from '../layout'

import Index from './'

FlowRouter.route('/users', {
  action() {
    mount(Layout, {
      template: () => <Index />
    })
  }
})
