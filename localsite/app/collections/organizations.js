define(['backbone', 'models/organization'],
function(backbone ,  OrganizationModel) {
  var OrganizationsCollection = Backbone.Collection.extend({
    model :  OrganizationModel,
    initialize: function(models, options) {
    },
    url : '/app/api/organizations/index.php'
  });
  return OrganizationsCollection;
});