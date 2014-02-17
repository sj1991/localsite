define(["jquery", "backbone", "views/analyitics"],
function($,        Backbone,   AnalyiticsView) {
  function AnalyiticsController() {
    this.view = new AnalyiticsView([],{});
    this.view.render();
  }
  return AnalyiticsController;
});