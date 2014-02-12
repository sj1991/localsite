define(["jquery", "backbone", "views/analyitics"],
function($,        Backbone,   AnalyiticsView) {
  function analyiticsController() {
    this.view = new AnalyiticsView([],{});
    this.view.render();
  }
  return analyiticsController;
});