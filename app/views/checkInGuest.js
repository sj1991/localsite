define(['jquery', 'backbone', 'templates'],
function($,        Backbone,   templates) {
  var CheckinGuestView = Backbone.View.extend({
    el : '.site-content',
    events : {
      "submit #checkinAGuest" : "checkinAGuest"
    },
    initialize: function(options) {
      this.meeting = options.meeting;
      this.organization = options.organization;
    },
    render : function() {
      var context = {
        meeting : this.meeting.toJSON(),
        organization : this.organization.toJSON()
      };
      this.$el.html(templates['checkinGuest/wrapper'](context));
      //Save the guestId input, as we'll be accessing it alot.
      this.guestIdInput = this.$el.find("#guestId");
      this.guestIdInput.focus(); //Autofocus on this input

    },
    checkinAGuest : function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      alert(this.guestIdInput.val());
      this.guestIdInput.val('');

    },
    remove : function() {
      this.stopListening();
      this.$el.html('');
    }
  });
  return CheckinGuestView;
});