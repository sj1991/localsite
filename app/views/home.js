define(['jquery', 'backbone', 'templates', 'views/startEventForm'],
function($,        Backbone,   templates,   StartEventFormView) {
  var HomeView = Backbone.View.extend({
    el : '.site-content',
    events : {
    },
    initialize: function(options) {
     if(options.hasOwnProperty('user') === 'undefined') {
        throw new Error("No user model specified");
      }
      this.user = options.user;
    },
    render : function() {
      this.$el.html(templates['home/main']());
      this.eventForm = new StartEventFormView({user: this.user});
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