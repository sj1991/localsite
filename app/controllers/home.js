define(["jquery", "backbone", "views/home"],
function($      ,  Backbone,   HomeView) {
  var HomeController = function(options) {
    var app = options.app;
    app.views.current = new HomeView(options);
    app.views.current.render();
  };
  return HomeController;
});