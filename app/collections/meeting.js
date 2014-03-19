define(['backbone', 'models/meeting'],
function(backbone ,  MeetingModel) {
  var MeetingCollection = Backbone.Collection.extend({
    model :  MeetingModel,
    initialize: function(options) {
      this.meetings = options.meetings;
    },
    url : '/api/organizations'
  });
  return MeetingCollection;
});