define(["jquery", "backbone", "views/home"],
function($,        Backbone,   HomeView) {
  var HomeController = function(app) {
    app.views.current = new HomeView([],{});
    app.views.current.render();
  };
  return HomeController;
});