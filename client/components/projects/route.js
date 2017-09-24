import Layout from '../layout'

import Index from './'

FlowRouter.route('/projects', {
  action() {
    mount(Layout, {
      template: () => <Index />
    })
  }
})
