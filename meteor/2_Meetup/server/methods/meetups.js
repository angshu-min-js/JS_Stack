Meteor.methods({
  'addMeetup.insert': function (params) {
    Meetups.insert(params);
  },
  'updateMeetup': function(id, params){
    Meteor.update({
      _id: id
    },{
      $set:params
    });
  }
});
