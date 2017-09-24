Projects = new Mongo.Collection('projects')

if (Meteor.isServer) {

  Meteor.publish('projects', function () {
    if (! this.userId)
      return this.ready()

    return Projects.find()
  })

}
