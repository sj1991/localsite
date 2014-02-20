define(['backbone'],
function(backbone) {
  var OrganizationModel = Backbone.Model.extend({
    idAttribute : 'id',
    initialize : function(options) {
      if(typeof options.id !== 'undefined') {
        this.id = options.id;
      }
      this.user = options.user;
    },
    url : function() {
      return '/app/api/organizations/index.php?id=' + this.id;
    },
    parse : function(res, options) {
      // //If a collection is calling this method, we need to grab the refernce of user
      // if(typeof this.user === 'undefined' && typeof options.user !== 'undefined') {
      //   this.user = options.user;
      // }

      // //Add property which shows if user belongs to the org
      // if(this.user.get('organizations').get(res.id)) {
      //   res.joined = true;
      // } else {
      //   res.joined = false;
      // }
      return res;
    }
  });
  return OrganizationModel;
});