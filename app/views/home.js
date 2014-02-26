define(['jquery', 'backbone', 'templates', 'views/startMeetingForm'],
function($,        Backbone,   templates,   StartMeetingFormView) {
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
      this.meetingForm = new StartMeetingFormView({user: this.user});
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