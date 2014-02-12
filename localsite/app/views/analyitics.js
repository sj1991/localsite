define(['jquery', 'backbone', 'templates'],
function($,        Backbone,   templates) {
  var HomeView = Backbone.View.extend({
    el : '.site-content',
    render : function() {
      document.body.innerHTML += "HI";
      alert("Rendering Analyitics View");
    }
  });
  return HomeView;
});