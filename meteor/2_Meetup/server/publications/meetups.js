Meteor.publishComposite("meetups", function() {
  return Meetups.find();
});
