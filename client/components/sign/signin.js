export default () => {

  return <div>

    <div className='err'></div>

    <form onSubmit={handleSubmit}>

      <div>
        <input type='text' id='username' defaultValue='demo' />
      </div>

      <div>
        <input type='password' id='password' defaultValue='demo' />
      </div>

      <div>
        <input type='submit' />
      </div>

    </form>

  </div>

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const [ username, password ] = form
    Meteor.loginWithPassword(username.value, password.value)
  }

}
