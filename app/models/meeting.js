define(['backbone'],
function(backbone) {
  var MeetingModel = Backbone.Model.extend({
    idAttribute : 'id',
    initialize : function(options) {
      if(typeof options.id !== 'undefined') {
        this.id = options.id;
      }
      this.meetings = options.meetings;
    },
    url : function() {
      return '/api/meeting/' + this.id;
    }
  });
  return MeetingModel;
});