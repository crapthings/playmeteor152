Statistics = new Mongo.Collection('statistics')

if (Meteor.isServer) {

  Meteor.publish('statistics.home', function () {
    if (! this.userId)
      return this.ready()

    const data = {
      users: Users.find().count(),
      projects: Projects.find().count(),
    }

    this.added('statistics', Random.id(), data)

    this.ready()
  })

}
