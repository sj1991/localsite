define(['jquery', 'foundation', 'backbone', 'templates'],
function($      ,  foundation ,  Backbone,   templates) {
  var StartEventFormView = Backbone.View.extend({
    el : '.startEventForm',
    events : {
      'click button.joinAnOrganization' : 'joinAnOrganization',
      'click button.startEvent' : 'startEvent',
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
    },
    joinAnOrganization : function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      alert("Join an org");
    },
    render : function() {
      this.$el.html(templates['forms/startEvent']());
      this.$el.foundation();
      
      //Bind ot valid form submission
      var that = this;
      this.$createNewEventModal = $("#createNewEventModal");
      this.$createNewEventModal.off('valid');
      this.$createNewEventModal.on('valid', function(ev) {
        that.createAnEvent();
      });
    },
    remove : function() {
      this.stopListening();
      this.$el.remove();
      this.$el.find('button.createAnEvent').off('click');
    }
  });
  return StartEventFormView;
});