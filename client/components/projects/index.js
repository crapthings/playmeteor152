const container = (props, onData) => {
  if (! Meteor.subscribe('projects').ready())
    return onData(null, null)
  const projects = Projects.find().fetch()
  onData(null, { projects })
}

const component = ({ projects }) => <table>
  <thead>
    <tr>
      <th>no. </th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>
    {projects.map((project, idx) => <tr key={project._id}>
      <td>{idx + 1}</td>
      <td>{project.name}</td>
    </tr>)}
  </tbody>
</table>

export default compose(tracker(container))(component)
