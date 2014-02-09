define(['jquery', 'handlebars', 'foundation', 'backbone'],
function($,   Handlebars,   foundation, Backbone) {
  var NavView = Backbone.View.extend({
    initialize: function(models, params) {
      this.loadTemplates();
    },
    loadTemplates : function() {
      templates.topNav =  Handlebars.compile(document.getElementById('nav/top-bar').text);
      templates.leftOffCanvas = Handlebars.compile(document.getElementById('nav/left-off-canvas').text);
    },
    render : function() {
      $('.top-bar').html(templates.topNav());
      $('.left-off-canvas-menu').html(templates.leftOffCanvas());
      $(document).foundation();
    }

  });
  return NavView;
});