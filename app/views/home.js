define(['jquery', 'backbone', 'templates', 'views/startMeetingForm'],
function($,        Backbone,   templates,   StartMeetingFormView) {
  var HomeView = Backbone.View.extend({
    el : '.site-content',
    events : {
    },
    initialize: function(options) {
     if(!options.hasOwnProperty('user')) {
        throw new Error("No user model specified");
      }
      if(!options.hasOwnProperty('vent')) {
        throw new Error("No vent property specified");
      }
      this.user = options.user;
      this.vent = options.vent;
    },
    render : function() {
      this.$el.html(templates['home/main']());
      this.meetingForm = new StartMeetingFormView({user: this.user, vent: this.vent});
      this.meetingForm.render();
    },
    remove : function() {
      this.meetingForm.remove();
      this.stopListening();
      this.$el.html('');
    }
  });
  return HomeView;
});