define(['backbone'],
function(backbone) {
  var OrganizationModel = Backbone.Model.extend({
    idAttribute : 'id',
    initialize : function(options) {
      if(typeof options.id !== 'undefined') {
        this.id = options.id;
      }
    },
    url : function() {
      return '/app/api/organizations/index.php?id=' + this.id;
    }
  });
  return OrganizationModel;
});