define(['jquery', 'backbone', 'templates', 'views/startEventForm'],
function($,        Backbone,   templates,   StartEventFormView) {
  var HomeView = Backbone.View.extend({
    el : '.site-content',
    events : {
    },
    render : function() {
      this.$el.html(templates['home/main']());
      this.eventForm = new StartEventFormView();
      this.eventForm.render();
    },
    remove : function() {
      this.eventForm.remove();
      this.stopListening();
      this.$el.html('');
    }
  });
  return HomeView;
});