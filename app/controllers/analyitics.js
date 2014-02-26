define(["jquery", "backbone", "views/analyitics"],
function($,        Backbone,   AnalyiticsView) {
  var AnalyiticsController = function(options) {
    this.view = new AnalyiticsView(options);
    this.view.render();
  };
  return AnalyiticsController;
});