const container = (props, onData) => {
  if (! Meteor.subscribe('statistics.home').ready())
    return onData(null, null)

  const data = Statistics.findOne()
  onData(null, data)
}

const component = ({ users, projects }) => <div>
  <div>we have {users} users</div>
  <div>we have {projects} projects</div>
</div>

export default compose(tracker(container))(component)
