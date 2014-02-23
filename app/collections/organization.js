define(['backbone', 'models/organization'],
function(backbone ,  OrganizationModel) {
  var OrganizationsCollection = Backbone.Collection.extend({
    model :  OrganizationModel,
    initialize: function(options) {
      this.user = options.user;
    },
    url : '/api/organizations'
  });
  return OrganizationsCollection;
});