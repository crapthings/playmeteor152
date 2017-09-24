import SignIn from './signin'

FlowRouter.route('/signin', {
  action() {
    mount(({ template }) => <div>{template()}</div>, {
      template: () => <SignIn />
    })
  }
})

FlowRouter.route('/signout', {
  action() {
    Meteor.logout(err => {
      if (! err)
        return FlowRouter.go('/')

      console.log(err)
    })
  }
})
