DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('mymeetups');
  }
});

DashboardController.helpers({
  'mymeetups': function(){
    return Meetups.find({user: Meteor.userId()});
  }
});

DashboardController.events({
  //submit add meetups
  'submit .update-meetup-form': function(event){
    var title = event.target.title.value;
    var email = event.target.email.value;
    var topics = event.target.topics.value;
    var type = event.target.type.value;
    var address = event.target.address.value;
    var city = event.target.city.value;
    var state = event.target.state.value;
    var zipcode = event.target.zipcode.value;
    var meetupdate = event.target.meetupdate.value;
    var id = event.target.id.value;

    // params object and store the above

    var params = {
        title: title,
        email: email,
        topics: topics,
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        meetupdate: meetupdate,
        updatedAt: new Date()
    }

    // insert meetups
    Meteor.call('updateMeetup', id, params);
    toastr.success('Meetup Updated');
    Router.go('/dashboard');
    return false;
});
