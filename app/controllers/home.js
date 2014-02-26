define(["jquery", "underscore", "backbone", "views/home"],
function($      ,  _          ,  Backbone,   HomeView) {
  var HomeController = function(options) {
    var app = options.app;
    options.vent = _.extend({}, Backbone.Events);
    app.views.current = new HomeView(options);
    app.views.current.render();
    
    options.vent.bind("post:startMeeting", function(post) {
      alert("Starting Meeting...");
      alert(JSON.stringify(post));
    });
    options.vent.bind("post:createAMeeting", function(post) {
      alert("Creating Meeting...");
      alert(JSON.stringify(post));
    });
  };
  return HomeController;
});