define(['jquery', 'backbone', 'templates'],
function($,        Backbone,   templates) {
  var NavView = Backbone.View.extend({
    initialize: function(models, params) {
      
    },
    render : function() {
      $('.top-bar').html(templates['nav/topBar']());
      $('.left-off-canvas-menu').html(templates['nav/leftOffCanvas']());
    }

  });
  return NavView;
});