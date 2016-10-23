Router.configure({
  templateLayout: 'layout'
});

Router.map(function(){
  this.route('home',{
    path: '/',
    template: 'home'
  });
})
