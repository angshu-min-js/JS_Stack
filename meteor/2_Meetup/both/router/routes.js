Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/meetups', {
  name: 'meetups',
  controller: 'MeetupsController'
});

Router.route('/meetups/add', {
  name: 'addMeetups',
  controller: 'MeetupsController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'addMeetups']
});
