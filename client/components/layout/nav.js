export default () => {

  const user = Meteor.user()

  return <nav>
    <a href='/'> home </a>
    <a href='/users'> users </a>
    <a href='/projects'> projects </a>
    <a href='/signout'> sign out </a>
  </nav>

}
