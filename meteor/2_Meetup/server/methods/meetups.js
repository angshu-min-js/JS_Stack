Meteor.methods({
  'addMeetup.insert': function (params) {
    Meetups.insert(params);
  }
});
