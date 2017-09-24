Users = Meteor.users

if (Meteor.isServer) {

  Meteor.publish(null, function () {
    const _id = this.userId
    if (! _id)
      return this.ready()

    return Users.find({ _id }, { fields: { services: false } })
  })

  Meteor.publish('users', function () {
    if (! this.userId)
      return this.ready()

    return Users.find()
  })

}
