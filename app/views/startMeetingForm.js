define(['jquery', 'foundation', 'backbone', 'templates'],
function($      ,  foundation ,  Backbone,   templates) {
  var StartMeetingFormView = Backbone.View.extend({
    initialize: function(options) {
      if(!options.hasOwnProperty('user')) {
        throw new Error("No user model given in options");
      }
      if(!options.hasOwnProperty('vent')) {
        throw new Error("No vent given in options");
      }
      this.user = options.user;
      this.vent = options.vent;
    },
    el : '.startMeetingForm',
    events : {
      'click button.startMeeting' : 'startMeeting',
      'change select.organization-dropdown' : 'organizationChanged',
    },
    closeModal : function() {
      this.$newMeetingModal.foundation('reveal', 'close');
    },
    createAMeeting : function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      var triggerDiv = this.$newMeetingModal.find(".triggers");
      var post = {
        organizationId : this.$el.find('.organization-dropdown').val(),
        meeting : {
          name: this.$newMeetingModal.find(".name").val(),
          triggers : {
            start :  triggerDiv.find(".start").val(),
            xmin  :  triggerDiv.find(".xmin").val(),
            end   :  triggerDiv.find(".end").val()
          }
        }
      };
      this.closeModal();
      this.vent.trigger("post:createAMeeting", post);
    },
    organizationChanged : function(ev) {
      var optionValue = ev.target.value.trim();
      //check if a valid organization was selected
      if(optionValue.length > 0) {
        this.showMeetingsFor(optionValue);
      } else {
        //disable meetings dropdown
        var meetingDropdown = this.$el.find('.meeting-dropdown');
        meetingDropdown.prop('disabled', true);
        meetingDropdown.html('');
        //disable start meeting button
        this.$el.find('.startMeeting').prop('disabled', true);
        //disable the new meeting button
        debug = this.$el;
        this.$el.find('.revealNewMeetingModal').addClass('disabled');
      }
    },
    showMeetingsFor : function(orgId) {
      var meetings = this.user.get('organizations').get(orgId).get('meetings');
      var html = templates['forms/startMeeting/meetings'](meetings.toJSON());
      //display organizations meetings
      var meetingDropdown = this.$el.find('.meeting-dropdown');
      meetingDropdown.html(html);
      //make sure the meeting select dropdown is enabled
      meetingDropdown.removeAttr('disabled');
      //enable the start button
      this.$el.find('.startMeeting').removeAttr('disabled');
      //enable the new meeting button
      this.$el.find('.revealNewMeetingModal').removeClass('disabled');
    },
    startMeeting : function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      var post = {
        orgId : this.$el.find('.organization-dropdown').val(),
        meetingId : this.$el.find('.meeting-dropdown').val()
      };
      /* Have controller handle this */
      this.vent.trigger("post:startMeeting", post);
    },
    render : function() {
      this.$el.html(templates['forms/startMeeting/layout'](this.user.toJSONR()));
      this.$el.foundation();
      this.$newMeetingModal = $("#newMeetingModal");
      this.bindModalEvents();
    },
    bindModalEvents : function() {
      var that = this;
      this.unbindModalEvents();
      //Open modal only if we've got a valid organization selected.
      this.$el.find("a.revealNewMeetingModal").on('click', function(ev) {
        var meetingDropdown = that.$el.find(".meeting-dropdown");
        if(!meetingDropdown.attr('disabled')) {
          that.$newMeetingModal.foundation('reveal','open');
        }
      });

      //Bind ot valid form submission
      this.$newMeetingModal.on('valid', function(ev) {
        that.createAMeeting(ev);
      });

      //Bind to the buttons for adding event triggers
      this.$newMeetingModal.find('a.addEvTrigger').on('click', function(ev) {
        that.$newMeetingModal.foundation('reveal', 'close');
      });
    },
    unbindModalEvents : function() {
      this.$newMeetingModal.off();
      this.$el.find("a.revealNewMeetingModal").off();
    },
    remove : function() {
      this.stopListening();
      this.unbindModalEvents();
      //Make sure the modal actually removes itself (ugh)
      this.$newMeetingModal.remove();

      this.$el.remove();
    }
  });
  return StartMeetingFormView;
});