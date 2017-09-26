Meteor.startup ->

  Users.remove {}
  Projects.remove {}

  unless do Users.findOne
    user =
      username: 'demo'
      password: 'demo'
    Accounts.createUser(user)

  unless do Users.find().count >= 101
    console.log 'insert 100 fake users'

    users = _.times 100, (n) ->
      username: do faker.internet.userName

    Users.batchInsert(users)

  unless do Projects.find().count >= 100
    console.log 'insert 100 fake projects'

    projects = _.times 100, (n) ->
      name: do faker.lorem.sentence

    Projects.batchInsert(projects)
