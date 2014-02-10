define(['jquery', 'handlebars', 'foundation', 'backbone', 'templates'],
function($,   Handlebars,   foundation, Backbone, templates) {
  var NavView = Backbone.View.extend({
    initialize: function(models, params) {
      
    },
    render : function() {
      alert(templates['nav/leftOffCanvas']());
      $('.top-bar').html(templates['nav/topBar']());
      $('.left-off-canvas-menu').html(templates['nav/leftOffCanvas']());
      $(document).foundation();
    }

  });
  return NavView;
});