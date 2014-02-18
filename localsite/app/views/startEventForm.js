define(['jquery', 'foundation', 'backbone', 'templates'],
function($      ,  foundation ,  Backbone,   templates) {
  var StartEventFormView = Backbone.View.extend({
    el : '.startEventForm',
    events : {
      'click button.startEvent' : 'startEvent'
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
    startEvent : function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      alert('todo - start event stuff');
    },
    render : function() {
      this.$el.html(templates['forms/startEvent']());
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