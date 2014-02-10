define(['backbone'],
function(backbone) {
  var UserModel = Backbone.Model.extend({
    initialize: function(options) {
      this.set('id', options.id);
    },
    urlRoot : '/app/api/user/'
  });
  return UserModel;
});