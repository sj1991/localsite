define(['backbone'],
function(backbone) {
  var OrganizationModel = Backbone.Model.extend({
    idAttribute : '_id',
    initialize : function(model, options) {
    },
    url : function() {
      return '/app/api/organizations/index.php?id=' + this.id;
    }
  });
  return OrganizationModel;
});