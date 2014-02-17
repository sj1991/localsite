define(["jquery", "backbone", "views/analyitics"],
function($,        Backbone,   AnalyiticsView) {
  var AnalyiticsController = function() {
    this.view = new AnalyiticsView([],{});
    this.view.render();
  };
  return AnalyiticsController;
});