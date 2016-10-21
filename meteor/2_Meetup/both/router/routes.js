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

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
