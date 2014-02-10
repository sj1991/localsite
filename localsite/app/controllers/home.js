define(["jquery", "backbone", "views/home"],
function($,        Backbone,   HomeView) {
  function homeController() {
    this.view = new HomeView([],{});
    this.view.render();
  }
  return homeController;
});