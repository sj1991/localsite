define(['backbone'],
function(backbone) {
  var UserModel = Backbone.Model.extend({
    initialize: function(options) {
      this.set('id', options.id);
    },
    urlRoot : '/app/api/user/',
    belongsToOrg : function(options) {
      var id = options.id;
      var usersOrganizations = this.get('organizations');
      for(var i = 0, l = usersOrganizations.length; i < l; ++i) {
        if(usersOrganizations[i].id == id) {
          return true;
        }
      }
      return false;
    }
  });
  return UserModel;
});