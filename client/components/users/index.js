const container = (props, onData) => {
  if (! Meteor.subscribe('users').ready())
    return onData(null, null)
  const users = Users.find().fetch()
  onData(null, { users })
}

const component = ({ users }) => <table>
  <thead>
    <tr>
      <th>no. </th>
      <th>username</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user, idx) => <tr key={user._id}>
      <td>{idx + 1}</td>
      <td>{user.username}</td>
    </tr>)}
  </tbody>
</table>

export default compose(tracker(container))(component)
