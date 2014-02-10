define(['jquery', 'backbone', 'templates'],
function($,        Backbone,   templates) {
  var HomeView = Backbone.View.extend({
    render : function() {
      alert("Rendering Home View");
    }
  });
  return HomeView;
});