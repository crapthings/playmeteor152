import SignIn from '../sign/signin'

import Nav from './nav'

const container = (props, onData) => {
  const userId = Meteor.userId()
  if (! userId)
    return onData(null, { userId })

  const isLoggingIn = Meteor.loggingIn()

  return onData(null, { userId, isLoggingIn, ...props })
}

const Layout = props => {
  return <div>
    <Nav />
    {props.template()}
  </div>
}

const IsLoggingIn = props => {
  return props.isLoggingIn
    ? <div>loading</div>
    : <Layout {...props} />
}

const component = props => {
  return props.userId
    ? <IsLoggingIn {...props} />
    : <SignIn />
}

export default compose(tracker(container))(component)
