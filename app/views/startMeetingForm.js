define(['jquery', 'foundation', 'backbone', 'templates'],
function($      ,  foundation ,  Backbone,   templates) {
  var StartMeetingFormView = Backbone.View.extend({
    initialize: function(options) {
      if(options.hasOwnProperty('user') === 'undefined') {
        throw new Error("No user model specified");
      }
      this.user = options.user;
    },
    el : '.startMeetingForm',
    events : {
      'click button.startMeeting' : 'startMeeting',
      'change select.organization-dropdown' : 'organizationChanged',
    },
    closeModal : function() {
      this.$newMeetingModal.foundation('reveal', 'close');
    },
    createAMeeting : function() {
      var name = this.$newMeetingModal.find(".name").val();
      var triggerDiv = this.$newMeetingModal.find(".triggers");
      var triggers = {
        start :  triggerDiv.find(".start").val(),
        xmin  :  triggerDiv.find(".xmin").val(),
        end   :  triggerDiv.find(".end").val()
      };
      alert("todo\nname:" + name + "\ntriggers:\n" + JSON.stringify(triggers));
      this.closeModal();
    },
    organizationChanged : function(ev) {
      var optionValue = ev.target.value.trim();

      if(optionValue === "joinOrg") {
        window.location = "/organizations";
      } else if(optionValue.length > 0) {
        this.showMeetingsFor(optionValue);
      } else {
        //disable meetings dropdown
        var meetingDropdown = this.$el.find('.meeting-dropdown');
        meetingDropdown.prop('disabled', true);
        meetingDropdown.html('');
        //disable start meeting button
        this.$el.find('.startMeeting').prop('disabled', true);
      }
    },
    showMeetingsFor : function(orgId) {
      var meetings = this.user.get('organizations').get(orgId).get('meetings');
      var html = templates['forms/startMeeting/meetings'](meetings);
      //display organizations meetings
      var meetingDropdown = this.$el.find('.meeting-dropdown');
      meetingDropdown.html(html);

      //make sure the meeting select dropdown is enabled
      meetingDropdown.removeAttr('disabled');

      //enable the start butotn
      this.$el.find('.startMeeting').removeAttr('disabled');
    },
    startMeeting : function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      alert('todo - start event stuff');
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
        that.createAMeeting();
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