define(['jquery', 'foundation', 'backbone', 'templates'],
function($      ,  foundation ,  Backbone,   templates) {
  var StartEventFormView = Backbone.View.extend({
    initialize: function(options) {
      if(options.hasOwnProperty('user') === 'undefined') {
        throw new Error("No user model specified");
      }
      this.user = options.user;
    },
    el : '.startEventForm',
    events : {
      'click button.startEvent' : 'startEvent',
      'change select.organization-dropdown' : 'organizationChanged'
    },
    closeModal : function() {
      this.$createNewEventModal.foundation('reveal', 'close');
    },
    createAnEvent : function() {
      var name = this.$createNewEventModal.find(".name").val();
      var triggerDiv = this.$createNewEventModal.find(".triggers");
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
      }
    },
    showMeetingsFor : function(orgId) {
      var meetings = this.user.get('organizations').get(orgId).get('meetings');
      var html = templates['forms/startEvent/meetings'](meetings);
      //display organizations meetings
      var meetingDropdown = this.$el.find('.meeting-dropdown');
      meetingDropdown.html(html);

      //make sure the meeting select dropdown is enabled
      meetingDropdown.removeAttr('disabled');
      
      //enable the start event butotn
      this.$el.find('.startEvent').removeAttr('disabled');
    },
    startEvent : function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      alert('todo - start event stuff');
    },
    render : function() {
      this.$el.html(templates['forms/startEvent/layout'](this.user.toJSONR()));


      this.$el.foundation();

      this.$createNewEventModal = $("#createNewEventModal");
      this.bindModalEvents();
    },
    bindModalEvents : function() {
      //Bind ot valid form submission
      var that = this;
      this.unbindModalEvents();
      this.$createNewEventModal.on('valid', function(ev) {
        that.createAnEvent();
      });
      this.$createNewEventModal.find('a.addEvTrigger').on('click', function(ev) {
        that.$createNewEventModal.foundation('reveal', 'close');
      });
    },
    unbindModalEvents : function() {
      this.$createNewEventModal.off();
    },
    remove : function() {
      this.stopListening();
      this.unbindModalEvents();
      //Make sure the modal actually removes itself (ugh)
      this.$createNewEventModal.remove();

      this.$el.remove();
    }
  });
  return StartEventFormView;
});